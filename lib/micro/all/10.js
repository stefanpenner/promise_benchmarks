var suite = {
  name: "All 10",
  initialize: function(Constructor) {
    var array = [];
    for (var i = 0; i < 10; i ++) {
      array.push(i);
    }
    return array;
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
