var obj = {};
export var test = {
  name: 'All object',
  needs: 'Constructor',
  distribution: true,
  initialize: function(Constructor, n) {
    var result = [];

    for (var i = 0; i < n; i++) {
      result.push(obj);
    }

    return result;
  },
  run: function(Constructor, testInstance, array) {
    Constructor.all(array).then(function() {
      testInstance.end();
    });
  },
  options: {
    defer: true
  }
};
