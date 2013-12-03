import Benchmark from 'benchmark';
import {implementations, lookupFeature} from './config';
import {group, groupEnd, log} from './polyfills';

import { suite as creation } from './micro/creation';
import { suite as reject} from './micro/reject';
import { suite as resolve } from './micro/resolve';
import { suite as resolvePromise } from './micro/resolve_promise';
import { suite as sequence_1 } from './micro/sequence_1';
import { suite as sequence_2 } from './micro/sequence_2';
import { suite as sequence_10 } from './micro/sequence_10';
import { suite as sequence_100 } from './micro/sequence_100';

var suites = [
  creation,
  reject,
  resolve,
  resolvePromise,
  sequence_1,
  sequence_2,
  sequence_10,
  sequence_100
];

// JDD will be making this change for 2.0
Benchmark.Deferred.prototype.end = Benchmark.Deferred.prototype.resolve;

function run() {
  if (!suites.length) { return; }
  
  var suite = suites.shift(),
      fn = suite.test,
      opts = suite.options;

  var benchmarkSuite = new createSuite(suite.name);

  implementations.forEach(function(implementation) {
    var Constructor = lookupFeature(implementation, 'Constructor');
    if (typeof suite.initialize === "function") {
      var initParam = suite.initialize(Constructor);
    }
    benchmarkSuite.add(implementation, function(testInstance) {
      fn(Constructor, testInstance, initParam);
    }, opts);
  });

  benchmarkSuite.run({ async: true });
}

function createSuite(name) {
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

export run;
