import Benchmark from 'benchmark';
import {implementations} from './config';

import { suite as creation } from './acceptance/creation';
import { suite as reject} from './acceptance/reject';
import { suite as resolve } from './acceptance/resolve';
import { suite as resolvePromise } from './acceptance/resolve_promise';
import { suite as sequence_1 } from './acceptance/sequence_1';
import { suite as sequence_2 } from './acceptance/sequence_2';
import { suite as sequence_10 } from './acceptance/sequence_10';
import { suite as sequence_100 } from './acceptance/sequence_100';

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

  console.log('Queueing Tests for', implementations.join(', '), '...');

  suite.on('start', function(event) {
    console.log('Running Tests for', this.name, '...');
  })
  .on('cycle', function(event) {
    console.log('   - [' + this.name + '] ' + String(event.target));
  })
  .on('complete', function(event) {
    console.log('Fastest for', this.name,'is', this.filter('fastest').pluck('name'));
    console.log('\n');
    run();
  })
  .run({ async: true });
}

export run;
