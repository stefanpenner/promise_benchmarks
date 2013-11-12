import Benchmark from 'benchmark';
import { implementations, lookupFeature } from '../config';

var suite = new Benchmark.Suite('Promise Rejection', {});

implementations.forEach(function(implementation){
  var Constructor = lookupFeature(implementation, 'Constructor');
  var reason = new Error();

  suite.add(implementation, function(){
    new Constructor(function(resolve, reject){
      reject(reason);
    });
  });
});

export suite;
