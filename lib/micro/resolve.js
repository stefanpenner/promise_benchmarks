export var suite = {
  name: "Resolve",
  needs: 'Constructor',
  test: function(Constructor, testInstance) {
    new Constructor(function(resolve, reject){
      resolve(1);
    }).then(function(){ testInstance.end(); });
  },
  options: {
    defer: true
  }
};
