var define, require;

(function() {
  var registry = {}, seen = {};

  define = function(name, deps, callback) {
    if (name && typeof window === 'object') {
      name = name.replace(/(:?\.\.?\/)+/,''); //strip relative paths for browser for now
    }
    registry[name] = { deps: deps, callback: callback };
  };

  define.registry = registry;
  define.amd = 'trickedya';

  require = function(name) {
    if (seen[name]) { return seen[name]; }
    seen[name] = {};

    var mod = registry[name];
    if (!mod) {
      throw new Error("Module '" + name + "' not found.");
    }

    var deps = mod.deps,
        callback = mod.callback,
        reified = [],
        exports;

    for (var i=0, l=deps.length; i<l; i++) {
      if (deps[i] === 'exports') {
        reified.push(exports = {});
      } else {
        reified.push(require(deps[i]));
      }
    }

    var value = callback.apply(this, reified);
    return seen[name] = exports || value;
  };
})();
