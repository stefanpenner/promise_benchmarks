var suite = {
	name: "All 100",
  initialize: function(Constructor) {
    var array = []
    for (var i = 0; i < 100; i ++) {
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
