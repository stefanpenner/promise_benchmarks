export var test = {
  name: 'All',
  needs: 'Constructor',
  distrubution: true,
  initialize: function(Constructor, n) {
    var result = [];

    for (var i = 0; i < n; i++) {
      result.push(1);
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
