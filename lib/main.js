import Benchmark from 'benchmark';
import { implementations, lookupFeature } from './config/implementations';
import { group, groupEnd, log } from './polyfills';
import tests from './config/tests';

// JDD will be making this change for 2.0
Benchmark.Deferred.prototype.end = Benchmark.Deferred.prototype.resolve;
var distributions = [1, 2, 10, 50, 100, 1000, 10000];
var runs = [];

function runRest() {
  if (runs.length > 0) {
    runs.shift().run({
      async: true
    });
  }
}

export function run(customTestPatterns, customImplementations, customIterations) {
  tests.forEach(function(testObj) {
    var prefix = typeof process === 'object' ? './tests/' : '';
    var test = require(prefix + testObj).test;
    var fn = test.run;
    var opts = test.options;
    var notes = test.notes;
    var iterations = test.distribution && distributions || [1];

    // If custom patterns are passed in and this test doesn't match any of them, skip it
    if (customTestPatterns && !customTestPatterns.some(function(p){
      return checkPattern(p, test.name, true);
    })) {
      return;
    }

    iterations.forEach(function(iteration) {
      if (customIterations && !customIterations.some(function(p){
        return checkPattern(p, iteration);
      })) {
        return;
      }

      var benchmarkSuite = makeSuite(test.name + ' ' + iteration, notes);

      implementations.forEach(function(implementation) {
        if (customImplementations && !customImplementations.some(function(p){
          return checkPattern(p, implementation, true);
        })) {
          return;
        }
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

function checkPattern(p, testName, log) {
  var isMatch = new RegExp(p.trim(), 'i').test(testName);

  // Remove this pattern match log if unnecessary
  if (isMatch && log) {
    //console.log("Test - '" + testName + "' matched with input pattern '" + p + "'");
  }

  return isMatch;
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
    console.log('Fastest for', name,'is', this.filter('fastest').map(function(run) { return run.name; }));
    groupEnd();
    runRest();
  })
  .on('error', function(event) {
    console.log('Error has occured: "' + event.target.error.message + '" in ' + event.target.name);
  });
}
