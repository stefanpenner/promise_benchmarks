var obj = {};
export var suite = {
  name: "All object 1",
  needs: 'Constructor',
  initialize: function(Constructor) {
    return [obj];
  },
  test: function(Constructor, testInstance, array) {
    Constructor.all(array).then(function() {
      testInstance.end();
    });
  },
  options: {
    defer: true
  }
};
