module.exports = {
  browser: {
    src: ['tmp/amd/**/*.js'],
    dest: 'tmp/public/<%= pkg.name %>.amd.js'
  }
};
