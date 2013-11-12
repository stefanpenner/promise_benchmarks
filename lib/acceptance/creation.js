import Benchmark from 'benchmark';
import { implementations, lookupFeature } from '../config';

var suite = new Benchmark.Suite('Promise Creation', {});

implementations.forEach(function(implementation){
  var Constructor = lookupFeature(implementation, 'Constructor');
  suite.add(implementation, function(){
    new Constructor(function(resolve, reject){ });
  });
});

export suite;
