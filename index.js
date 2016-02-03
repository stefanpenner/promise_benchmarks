var args = process.argv.slice(2);

/*
Look for tests|t = comma separated value of regexes
For example you can type in t=creat,reject OR tests='\d'
*/
var customTestPatterns = args.filter(function(elem) {
	return /(tests|t)=/i.test(elem);
})[0];

var customImplementations = args.filter(function(elem) {
	return /(implementations|impl)=/i.test(elem);
})[0];

var customIterations = args.filter(function(elem) {
	return /(iterations|i)=/i.test(elem);
})[0];


if (customTestPatterns) {
	// Extract out the comma separated patterns
	customTestPatterns = customTestPatterns.trim()
    .substring(customTestPatterns.indexOf('=') + 1)
		.split(',');
}

if (customIterations) {
	// Extract out the comma separated patterns
	customIterations = customIterations.trim()
    .substring(customIterations.indexOf('=') + 1)
		.split(',');
}

if (customImplementations) {
	// Extract out the comma separated patterns
	customImplementations= customImplementations.trim()
    .substring(customImplementations.indexOf('=') + 1)
		.split(',');
}

require('./es6');
require('./lib/main').run(customTestPatterns,
                          customImplementations,
                          customIterations);
