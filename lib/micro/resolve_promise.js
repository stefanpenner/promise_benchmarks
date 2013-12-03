var suite = {
  name: "Resolve Promise",
  // Called before each test run
  initialize: function(Constructor) {
    return new Constructor(function(resolve) {
      resolve(1);
    });
  },
  test: function(Constructor, testInstance, promise) {
    new Constructor(function(resolve, reject){
      resolve(promise);
    }).then(function(){ testInstance.end(); });
  },
  options: {
    defer: true
  }
}; 

export suite;
