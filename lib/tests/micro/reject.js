var reason = new Error();

export var test = {
  name: 'Reject',
  needs: 'Constructor',
  run: function(Constructor, testInstance) {
    new Constructor(function(resolve, reject) {
      reject(reason);
    }).then(undefined, function(){ testInstance.end(); });
  },
  options: {
    defer: true
  }
};
