var Compiler = require("es6-module-transpiler").Compiler;
var fs = require('fs');

var CRAZY_REGEX = new RegExp((process.cwd() + '/lib').replace('/','\/'));
var OTHER_CRAZY_REGEX = /(require\(['"][^.][^)]+\))\[['"]default['"]\]/;

// depreciated, but will apparently be around for ever
// http://nodejs.org/api/globals.html#globals_require_extensions
require.extensions['.js'] = function(module, filename) {
  var content = fs.readFileSync(filename, 'utf8').toString();
  if (CRAZY_REGEX.test(filename)) {

    var compiler = new Compiler(content.toString(),  filename);
    var compiled = compiler.toCJS();

    // crazy hacks, until the transpiler is fixed
    compiled = compiled.replace(OTHER_CRAZY_REGEX, '$1');
    return module._compile(compiled, filename);

  } else {
    return module._compile(content, filename);
  }
};
