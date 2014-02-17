export var suite = {
	name: "Creation",
  needs: 'Constructor',
	test: function(Constructor, testInstance) {
		new Constructor(function() { });
	}
};
