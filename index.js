var custom_tests = process.argv.slice(2);
require('./es6');
require('./lib/main').run(custom_tests);
