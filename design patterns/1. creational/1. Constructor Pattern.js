class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.getDetails = function () {
      console.log(`${this.name} is ${this.age} years old!`);
    };
  }
}

//Creating new instance of Person
const personOne = new Person("John", 20);

personOne.getDetails();
