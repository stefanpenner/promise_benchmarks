import Benchmark from 'benchmark';
import {implementations} from './config';
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
  var suite = suites.shift();

  suite.on('start', function(event) {
    group('Running Tests for', this.name, '...');
  })
  .on('cycle', function(event) {
    console.log('- [' + this.name + '] ' + String(event.target));
  })
  .on('complete', function(event) {
    console.log('Fastest for', this.name,'is', this.filter('fastest').pluck('name'));
    groupEnd();
    run();
  })
  .on('error', function(event) {
    console.log('Error has occured: "' + event.targer.error.message + '" in ' + event.target.name);
  })
  .run({ async: true });
}

export run;
