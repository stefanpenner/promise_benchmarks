export var test = {
  name: "Resolve Promise",
  needs: 'Constructor',
  // Called before each test run
  initialize: function(Constructor) {
    return new Constructor(function(resolve) {
      resolve(1);
    });
  },
  run: function(Constructor, testInstance, promise) {
    new Constructor(function(resolve, reject){
      resolve(promise);
    }).then(function(){ testInstance.end(); });
  },
  options: {
    defer: true
  }
};
