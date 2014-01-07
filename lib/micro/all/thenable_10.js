export var suite = {
	name: "All thenable 10",
	initialize: function(Constructor) {
    var array = [];

    function resolver(resolve) { resolve(1); }

    for (var i = 0; i < 10; i++) {
      array.push(new Constructor(resolver));
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
