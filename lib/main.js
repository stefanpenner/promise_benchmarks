import Benchmark from 'benchmark';
import { implementations, lookupFeature } from './config';
import { group, groupEnd, log } from './polyfills';
import suites from './suites';

// JDD will be making this change for 2.0
Benchmark.Deferred.prototype.end = Benchmark.Deferred.prototype.resolve;

export function run() {
  if (!suites.length) { return; }

  var suite = suites.shift(),
      fn = suite.test,
      opts = suite.options;

  var benchmarkSuite = makeSuite(suite.name);

  implementations.forEach(function(implementation) {
    var feature, constructor, initParam;

    feature = lookupFeature(implementation, suite.needs);

    if (feature === undefined) { return; }
    constructor = lookupFeature(implementation, 'Constructor');
    if (typeof suite.initialize === 'function') {
      initParam = suite.initialize(constructor);
    }

    benchmarkSuite.add(implementation, function(testInstance) {
      fn(feature, testInstance, initParam);
    }, opts);
  });

  benchmarkSuite.run({
    async: true
  });
}

function makeSuite(name) {
  return new Benchmark.Suite().on('start', function(event) {
    group('Running Tests for', name, '...');
  })
  .on('cycle', function(event) {
    console.log('- [' + name + '] ' + String(event.target));
  })
  .on('complete', function(event) {
    console.log('Fastest for', name,'is', this.filter('fastest').pluck('name'));
    groupEnd();
    run();
  })
  .on('error', function(event) {
    console.log('Error has occured: "' + event.target.error.message + '" in ' + event.target.name);
  });
}
