import Benchmark from 'benchmark';
import { implementations, lookupFeature } from '../config';

var suite = new Benchmark.Suite('resolve pending promise');

implementations.forEach(function(implementation){
  var Constructor = lookupFeature(implementation, 'Constructor');
  var promise = new Constructor(function(){ });
  var reason = new Error();

  suite.add(implementation, function(){
    new Constructor(function(resolve, reject){
      resolve(promise);
    });
  });
});

export suite;
