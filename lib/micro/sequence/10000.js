var SEQUENCE_COUNT = 10000;

export var suite = {
  name: "Then Sequence 10,000",
  // Called before each test run
  initialize: function(Constructor) {
    return new Constructor(function(resolve) {
      resolve(1);
    });
  },
  test: function(Constructor, testInstance, promise) {
    for (var i = 0; i < SEQUENCE_COUNT; i ++) {
      promise = promise.then();
    }

    promise.then(function(){ testInstance.end(); });
  },
  options: {
    defer: true
  }
};
