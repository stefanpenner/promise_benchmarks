module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var config = require('load-grunt-config')(grunt, {
    configPath: 'tasks/options',
    init: false
  });

  grunt.loadTasks('tasks');

  this.registerTask('default', ['build']);
  this.registerTask('build',   ['clean', 'transpile', 'concat:browser']);

  config.env = process.env;
  config.pkg = grunt.file.readJSON('package.json');

  grunt.initConfig(config);
};
