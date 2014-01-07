import Benchmark from 'benchmark';
import { implementations, lookupFeature } from './config';
import { group, groupEnd, log } from './polyfills';
import suites from './suites';

// JDD will be making this change for 2.0
Benchmark.Deferred.prototype.end = Benchmark.Deferred.prototype.resolve;
var distributions = [1, 2, 10, 100, 1000, 10000];
var runs = [];

function runRest() {
  runs.shift().run({
    async: true
  });
}

export function run() {
  suites.forEach(function(suiteFile){
    var prefix = typeof process === "object" ? "./" : '';    
    var suite = require(prefix + suiteFile).suite,
      fn = suite.test,
      opts = suite.options,
      notes = suite.notes,
      iterations = suite.distribution && distributions || [1];

    iterations.forEach(function(iteration) {
      var s = suite;
      var benchmarkSuite = makeSuite(s.name + ' ' + iteration, notes);

      implementations.forEach(function(implementation) {
        var constructor, initParam;
        var feature = lookupFeature(implementation, s.needs);

        if (feature === undefined) { return; }

        constructor = lookupFeature(implementation, 'Constructor');

        if (typeof suite.initialize === 'function') {
          initParam = s.initialize(constructor, iteration);
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
    group('Running Tests for', name, '...');
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
