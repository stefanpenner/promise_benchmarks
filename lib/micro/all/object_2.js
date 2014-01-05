var obj = {};
export var suite = {
  name: "All object 2",
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
