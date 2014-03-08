var reason = new Error();

export var suite = {
  name: 'Reject',
  needs: 'Constructor',
  test: function(Constructor, testInstance) {
    new Constructor(function(resolve, reject) {
      reject(reason);
    }).then(undefined, function(){ testInstance.end(); });
  },
  options: {
    defer: true
  }
};
