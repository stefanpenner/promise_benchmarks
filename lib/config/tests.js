var glob = require("glob")
var tests = glob.sync('**/*.js', {
	cwd: "lib/tests/"
});

export default tests;
