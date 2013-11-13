import Benchmark from 'benchmark';
import { implementations, lookupFeature } from '../config';

var suite = new Benchmark.Suite('then sequence');

var SEQUENCE_COUNT = 10;

implementations.forEach(function(implementation){
  var Constructor = lookupFeature(implementation, 'Constructor');
  var promise = new Constructor(function(resolve, rejection){
    resolve(1);
  });

  suite.add(implementation, function(test) {
    for (var i = 0; i < SEQUENCE_COUNT; i ++) {
      promise = promise.then();
    }

    promise.then(function(){ test.end(); });
  }, { defer: true });
});

export suite;
