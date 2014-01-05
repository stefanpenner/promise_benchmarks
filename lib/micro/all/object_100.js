var obj = {};
var result = [];

for (var i = 0; i < 100; i++) {
  result.push(obj);
}

export var suite = {
  name: "All object 100",
  initialize: function(Constructor) {
    return result;
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
