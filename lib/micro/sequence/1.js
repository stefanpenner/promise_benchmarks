var suite = {
	name: "Then Sequence 1",
	// Called before each test run
	initialize: function(Constructor) {
		return new Constructor(function(resolve) {
			resolve(1);
		});
	},
	test: function(Constructor, testInstance, promise) {
		promise.then(function(){ testInstance.end(); });
	},
	options: {
		defer: true
	}
}; 

export suite;
