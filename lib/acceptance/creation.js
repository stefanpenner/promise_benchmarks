import Benchmark from 'benchmark';
import { implementations, lookupFeature } from '../config';

var suite = new Benchmark.Suite('creation');

implementations.forEach(function(implementation){
  console.log('creation test for:' + implementation);
  var Constructor = lookupFeature(implementation, 'Constructor');
  suite.add(implementation, function(){
    new Constructor(function(resolve, reject){ });
  });
});

export suite;
