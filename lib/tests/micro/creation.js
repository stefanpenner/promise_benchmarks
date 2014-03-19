export var test = {
  name: 'Creation',
  needs: 'Constructor',
  run: function(Constructor, testInstance) {
    new Constructor(function() { });
  }
};
