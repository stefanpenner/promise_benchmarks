export var suite = {
	name: "All 2",
  needs: 'Constructor',
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
