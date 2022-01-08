// Prototype Class
const car = {
  noOfWheels: 4,
  start() {
    return "started";
  },
  stop() {
    return "stopped";
  },
};

//using Object.create to create clones - as recommended by ES5 standard
const myCar = Object.create(car);

console.log(myCar.start(), myCar.__proto__, myCar.__proto__ === car); // true

function User(name, email) {
  this.name = name;
  this.email = email;
  this.status = false;
}

User.prototype.getStatus = function () {
  return this.status;
};

User.prototype.setStatus = function (val) {
  this.status = !!val;
  return this;
};

function Admin(...args) {
  User.apply(this, args);
  this.role = "admin";
}

Admin.prototype = Object.create(User.prototype);
console.log(
  Admin.prototype.__proto__,
  Admin.prototype.__proto__ == User.prototype
);
Admin.prototype.getRole = function () {
  return this.role;
};

console.log(new Admin("Prateek", "test@test.com").setStatus(true).getStatus());
