import Benchmark from 'benchmark';
import { implementations, lookupFeature } from '../config';

var suite = new Benchmark.Suite('Resolve Promise: promise');

implementations.forEach(function(implementation){
  var Constructor = lookupFeature(implementation, 'Constructor');
  var promise = new Constructor(function(resolve) {
    resolve(1);
  });

  var reason = new Error();

  suite.add(implementation, function(test) {
    new Constructor(function(resolve, reject){
      resolve(promise);
    }).then(function(){ test.end(); });
  }, { defer: true });
});

export suite;
