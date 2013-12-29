import Benchmark from 'benchmark';
import {implementations, lookupFeature} from './config';
import {group, groupEnd, log} from './polyfills';

import { suite as creation } from './micro/creation';
import { suite as reject} from './micro/reject';
import { suite as resolve } from './micro/resolve';
import { suite as resolvePromise } from './micro/resolve_promise';
import { suite as sequence_1 } from './micro/sequence/1';
import { suite as sequence_2 } from './micro/sequence/2';
import { suite as sequence_10 } from './micro/sequence/10';
import { suite as sequence_100 } from './micro/sequence/100';

import { suite as all_1 } from './micro/all/1';
import { suite as all_2 } from './micro/all/2';
import { suite as all_10 } from './micro/all/10';
import { suite as all_100 } from './micro/all/100';
import { suite as all_10000 } from './micro/all/10000';

import { suite as all_thenable_1 } from './micro/all/thenable_1';
import { suite as all_thenable_2 } from './micro/all/thenable_2';
import { suite as all_thenable_10 } from './micro/all/thenable_10';
import { suite as all_thenable_100 } from './micro/all/thenable_100';
import { suite as all_thenable_10000 } from './micro/all/thenable_10000';

var suites = [
  all_1,
  all_2,
  all_10,
  all_100,
  all_10000,

  all_thenable_1,
  all_thenable_2,
  all_thenable_10,
  all_thenable_100,
  all_thenable_10000,

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
