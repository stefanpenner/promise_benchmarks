var args = process.argv.slice(2);

/*
Look for tests|t = comma separated value of regexes
For example you can type in t=creat,reject OR tests='\d'
*/
var customTestPatterns = args.filter(function(elem) {
	return /^(tests|t)=/i.test(elem);
})[0];

if (customTestPatterns) {
	// Extract out the comma separated patterns
	customTestPatterns = customTestPatterns.trim()
    .substring(customTestPatterns.indexOf('=') + 1)
		.split(',');
}

require('./es6');
require('./lib/main').run(customTestPatterns);
