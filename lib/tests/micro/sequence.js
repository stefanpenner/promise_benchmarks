export var test = {
  name: 'Then sequence',
  needs: 'Constructor',
  distribution: true,
  initialize: function(Constructor, n) {

    function sequence(tasks) {
      var length = tasks.length;
      var current = Constructor.resolve();

      for (var i = 0; i < length; ++i) {
        current = current.then(tasks[i]);
      }

      return current;
    }

    var tasks = [];

    function resolver(resolve) {
      resolve(1);
    }

    function makePromise() {
      return new Constructor(resolver);
    }

    for (var i = 0; i < n; i++) {
      tasks.push(makePromise());
    }

    return {
      sequence: sequence,
      tasks: tasks
    };
  },

  run: function(Constructor, testInstance, setup) {
    setup.sequence(setup.tasks).then(function(){
      testInstance.end();
    });
  },
  options: {
    defer: true
  }
};
