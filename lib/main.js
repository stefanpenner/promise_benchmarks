import Benchmark from 'benchmark';

import { suite as creation } from './acceptance/creation';
import { suite as reject} from './acceptance/reject';
import { suite as resolve } from './acceptance/resolve';
import { suite as resolvePromise } from './acceptance/resolve_promise';
import { suite as sequence } from './acceptance/sequence';

Benchmark.options = {
  onCycle: function(event) {
    // console.log(event.currentTarget.name + ':', String(event.target));
  },
  onComplete: function(event) {
    console.log('COMPLETE:' + event.currentTarget.name + ':', String(event.target));
  },
  onAbort: function(event) {
    console.log('abort');
  },
  onError: function(){
    console.log('error');
  }
};

var suites = [
  creation,
  reject,
  resolve,
  resolvePromise,
  sequence
];

function run(){
  console.log('queueing');
  suites.forEach(function(suite){
    console.log('suite', suite);
    suite.run({
      //async: true,
      queued: true
    });
  });
}

export run;
