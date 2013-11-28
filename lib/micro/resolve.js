import Benchmark from 'benchmark';
import { implementations, lookupFeature } from '../config';

var suite = new Benchmark.Suite('Promise Resolve: value');

implementations.forEach(function(implementation) {
  var Constructor = lookupFeature(implementation, 'Constructor');

  suite.add(implementation, function(test) {
    new Constructor(function(resolve, reject){
      resolve(1);
    }).then(function(){ test.end(); });
  }, { defer: true });
});

export suite;
