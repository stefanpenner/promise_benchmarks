export var test = {
  name: "Resolve",
  needs: 'Constructor',
  run: function(Constructor, testInstance) {
    new Constructor(function(resolve, reject){
      resolve(1);
    }).then(function(){ testInstance.end(); });
  },
  options: {
    defer: true
  }
};
