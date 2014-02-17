var obj = {};
export var suite = {
  name: "All object 2",
  needs: 'Constructor',
  initialize: function(Constructor) {
    return [obj, obj];
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
