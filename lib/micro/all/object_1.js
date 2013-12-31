var obj = {};
var suite = {
  name: "All object 1",
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

export suite;
