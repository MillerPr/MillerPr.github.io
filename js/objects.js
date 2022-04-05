var Person = function (name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log(`Hi, I am  ${this.name}`);
  }
};

var Pet = function(name, food) {
  this.name = name;
  this.food = food;
  this.canTalk = false;
}

var spot = new Pet('spot', 'kibble');

Pet.prototype.feedMe = function () {
  if (this.food) {
    console.log(`My name is ${this.name} and I eat ${this.food}.`);
  }
}

var Parrot = function(name) {
  Pet.call(this, name);
  //Pet.call(this, food);
  this.canTalk = true;
}

Parrot.prototype = Object.create(Pet.prototype);
Parrot.prototype.constructor = Parrot;

Parrot.prototype.feedMe = function () {
  if (this.food) {
    console.log(`My name is ${this.name} and I eat ${this.food}.`);
  }
}

var polly = new Parrot('polly');

var Employee = function (name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee,
//it will take prototype.constructor of Person (parent).
//To avoid that, we set the prototype.constructor to Employee (child).

Employee.prototype.greet = function () {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function (name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer,
//it will take prototype.constructor of Person (parent).
//To avoid that, we set the prototype.constructor to Customer (child).

var Mime = function (name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
//it will take prototype.constructor of Person (parent).
//To avoid that, we set the prototype.constructor to Mime (child).

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();

// Set objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// Practical use: enforce unique/keyed values of an array
const set01 = new Set();
set01.add(bob);
set01.add(polly);

// Map objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// You can convert back and forth from 2D arrays to maps.
const map01 = new Map();
map01.set('bird', polly)
map01.set('employee', bob)
map01.get('employee').greet()
// for..of uses the sequence key, value, here as a, b.
for (const [a, b] of map01) { console.log(`${a} is ${b.name}`) }
// forEach uses the sequence value, key!! Notice (b, a)
map01.forEach(function (b, a) { console.log(`${a} is ${b.name}`)})
