//Singleton class
var Singleton = (function () {
  var instance;

  function createDBInstance() {
    var object = new Object("I am the DataBase instance");
    return object;
  }

  return {
    getDBInstance: function () {
      if (!instance) {
        instance = createDBInstance();
      }
      return instance;
    },
  };
})();

function run() {
  var instance1 = Singleton.getDBInstance();
  var instance2 = Singleton.getDBInstance();

  console.log("Same instance? " + (instance1 === instance2));
}

run(); // OUTPUT = "Same instance? true"
