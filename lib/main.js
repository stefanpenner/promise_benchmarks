import Benchmark from 'benchmark';
import {implementations} from './config';

import { suite as creation } from './acceptance/creation';
import { suite as reject} from './acceptance/reject';
import { suite as resolve } from './acceptance/resolve';
import { suite as resolvePromise } from './acceptance/resolve_promise';
import { suite as sequence } from './acceptance/sequence';

var suites = [
  creation,
  reject,
  resolve,
  resolvePromise,
  sequence
];

var index = 0;

// JDD will be making this change for 2.0
Benchmark.Deferred.prototype.end = Benchmark.Deferred.prototype.resolve;

function run(){
  console.log('Queueing Tests for', implementations.join(', '), '...');
  if (suites.length < index) { return; }
  var suite = suites[index];
  index++;

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
