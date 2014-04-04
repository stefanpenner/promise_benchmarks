export var test = {
  name: "Then thenning",
  distribution: true,
  // Called before each test run
  initialize: function(Constructor, n) {

    return {
      n: n,
      promise: new Constructor(function(resolve) {
        resolve(1);
      })
    };
  },

  run: function(Constructor, testInstance, setup) {
    var promise = setup.promise;
    var n = setup.n;
    for (var i = 0; i < n; i ++) {
      promise = promise.then();
    }

    promise.then(function(){ testInstance.end(); });
  },
  options: {
    defer: true
  }
};
