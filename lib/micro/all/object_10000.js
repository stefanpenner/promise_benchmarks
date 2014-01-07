var obj = {};
var result = [];

for (var i = 0; i < 10000; i++) {
  result.push(obj);
}

export var suite = {
  name: "All object 10,000",
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
