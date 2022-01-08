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

Admin.prototype.getRole = function () {
  return this.role;
};

console.log(new Admin("Prateek", "test@test.com").setStatus(true).getStatus());
