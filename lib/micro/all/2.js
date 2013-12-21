var suite = {
	name: "All 2",
  initialize: function(Constructor) {
    return [1, 2];
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
