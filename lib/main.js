import Benchmark from 'benchmark';
import { implementations, lookupFeature } from './config/implementations';
import { group, groupEnd, log } from './polyfills';
import tests from './config/tests';

// JDD will be making this change for 2.0
Benchmark.Deferred.prototype.end = Benchmark.Deferred.prototype.resolve;
var distributions = [1, 2, 10, 100, 1000, 10000];
var runs = [];

function runRest() {
  if (runs.length > 0) {
    runs.shift().run({
      async: true
    });
  }
}

export function run() {
  tests.forEach(function(testObj){
    var prefix = typeof process === 'object' ? './tests/' : '',
      test = require(prefix + testObj).test,
      fn = test.run,
      opts = test.options,
      notes = test.notes,
      iterations = test.distribution && distributions || [1];

    iterations.forEach(function(iteration) {      
      var benchmarkSuite = makeSuite(test.name + ' ' + iteration, notes);

      implementations.forEach(function(implementation) {
        var constructor, initParam;
        var feature = lookupFeature(implementation, test.needs);

        if (feature === undefined) { return; }

        constructor = lookupFeature(implementation, 'Constructor');

        if (typeof test.initialize === 'function') {
          initParam = test.initialize(constructor, iteration);
        }

        benchmarkSuite.add(implementation, function(testInstance) {
          fn(feature, testInstance, initParam);
        }, opts);
      });

      runs.push(benchmarkSuite);
    });
  });

  runRest();
}

function makeSuite(name, notes) {
  return new Benchmark.Suite().on('start', function(event) {
    group('Running Benchmark Suite for test -', name, '...');
    if (notes) {
      console.log(notes);
    }
  })
  .on('cycle', function(event) {
    console.log('- [' + name + '] ' + String(event.target));
  })
  .on('complete', function(event) {
    console.log('Fastest for', name,'is', this.filter('fastest').pluck('name'));
    groupEnd();
    runRest();
  })
  .on('error', function(event) {
    console.log('Error has occured: "' + event.target.error.message + '" in ' + event.target.name);
  });
}
