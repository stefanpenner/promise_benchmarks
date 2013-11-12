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

function run(){
  console.log('Queueing Tests for', implementations.join(', '), '...');
  console.log('\n');
  
  suites.forEach(function(suite){
    
    suite.on('start', function(event) {
      console.log('Running Tests for', this.name, '...');
      console.log('\n');
    })
    .on('cycle', function(event) {        
      console.log(String(event.target));
    })
    .on('complete', function(event) {
      console.log('Fastest for', this.name,'is', this.filter('fastest').pluck('name'));
      console.log('\n');
    })
    .run({
      // async: true
    });

  });
}

export run;
