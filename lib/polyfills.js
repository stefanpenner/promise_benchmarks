/* jshint esnext: true */
var local = {
  groups: []
};

var log = console.log || function() {
  this.history = this.history || [];
  this.history.push(arguments);

  if (typeof console !== 'undefined' && typeof console === 'function') {
    console.log('-----------------');
    var i = 0;
    while (i < arguments.length) {
      console.log(arguments[i]);
      i++;
    }
  } else if ((Array.prototype.slice.call(arguments)).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === 'string') {
    console.log((Array.prototype.slice.call(arguments)).toString());
  } else {
    console.log(Array.prototype.slice.call(arguments));
  }
};

var group = function() {
  if (console.group) {
    console.group((Array.prototype.slice.call(arguments)).join(' '));
  } else {
    console.log((Array.prototype.slice.call(arguments)).join(' '));
    local.groups.push((Array.prototype.slice.call(arguments)).join(' '));
  }
};

var groupEnd = function() {
  if (console.groupEnd) {
    console.groupEnd();
  } else {
    local.groups.pop();
  }
};

export log;
export group;
export groupEnd;
