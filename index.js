var args = process.argv.slice(2);

/* 
Look for tests|t = comma separated value of regexes
For example you can type in t=creat,reject OR tests='\d'
*/
var custom_test_patterns = args.filter(function(elem) {	
	return /^(tests|t)=/i.test(elem);
})[0];

if (custom_test_patterns) {	
	// Extract out the comma separated patterns	
	custom_test_patterns = custom_test_patterns.trim()
																						 .substring(custom_test_patterns.indexOf('=') + 1)
																						 .split(',');
}

require('./es6');
require('./lib/main').run(custom_test_patterns);
