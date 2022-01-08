var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  divide: function (x, y) {
    return x / y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};
var manager = {
  execute: function (name, args) {
    if (name in calculator) {
      return calculator[name].apply(calculator, [].slice.call(arguments, 1));
    }
    return false;
  },
};
console.log(manager.execute("add", 5, 2)); // prints 7
console.log(manager.execute("multiply", 2, 4)); // prints 8
