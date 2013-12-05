var reason = new Error();

var suite = {
	name: "Reject",
	test: function(Constructor, testInstance) {
		new Constructor(function(resolve, reject) {
			reject(reason);
		}).then(undefined, function(){ testInstance.end(); });
	},
	options: {
		defer: true
	}
}; 

export suite;
