var suite = {
	name: "Creation",
	test: function(Constructor, testInstance) {
		new Constructor(function() { });
	}
}; 

export suite;