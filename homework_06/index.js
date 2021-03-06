// Class declaration
class User {
  constructor(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
  }
  getName() {
    return this.name;
  }
  getIsAdmin() {
    return this.isAdmin;
  }
}

// Class inheritance
class SuperUser extends User {
  constructor(name, isAdmin, role) {
    super(name, isAdmin);
    this._role = role;
  }
  get role() {
    return this._role;
  }
  set role(newRole) {
    this._role = newRole;
  }
}

// Function declaration
function fnUser(name, isAdmin) {
  this.name = name;
  this.isAdmin = isAdmin;
  this.getName = function () {
    return this.name;
  };
  this.getIsAdmin = function () {
    return this.isAdmin;
  };
}

// Functional inheritance
function DefaultUser(name, isAdmin) {
  fnUser.apply(this, arguments);
  // method override
  this.getName = function () {
    return `My name is ${this.name}`;
  };
  // method extension
  const parentGetIsAdmin = this.getIsAdmin;
  this.getIsAdmin = function () {
    return parentGetIsAdmin.call(this);
  };
  // new method
  this.getAllData = function () {
    return `My name is ${this.name} and I'm an admin - ${this.isAdmin}`;
  };
}

// Prototype inheritance
function Admin(name, isAdmin, isBubo) {
  this.name = name;
  this.isAdmin = isAdmin;
  this.isBubo = isBubo;
}
Admin.prototype = Object.create(fnUser.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.getName = function () {
  return `My name is ${this.name} and I'm an admin - ${this.isAdmin} and I have a bubo - ${this.isBubo}`;
};

// const vasya = new User("Vasya", false);
// console.log(vasya.getName());

// const nastya = new SuperUser("Anasteshin", true, "super-puper");
// console.log(nastya.isAdmin);
// console.log(nastya.role);

// const anatolii = new fnUser("Anatolii", false);
// console.log(anatolii.getName());

// const kolya = new DefaultUser("Kolya", false);
// console.log(kolya.getAllData());

// const olya = new Admin("Olya", true, true);
// console.log(olya.getName());
