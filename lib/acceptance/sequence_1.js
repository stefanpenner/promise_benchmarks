import Benchmark from 'benchmark';
import { implementations, lookupFeature } from '../config';

var suite = new Benchmark.Suite('Then Sequence 1');

var SEQUENCE_COUNT = 1;

implementations.forEach(function(implementation){
  var Constructor = lookupFeature(implementation, 'Constructor');
  var promise = new Constructor(function(resolve, rejection){
    resolve(1);
  });

  suite.add(implementation, function(test) {
    promise.then(function(){ test.end(); });
  }, { defer: true });
});

export suite;
