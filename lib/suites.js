var glob = require('glob')
var suites = glob.sync('micro/**/*.js', {
	cwd: 'lib'
});

export default suites;
