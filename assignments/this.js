/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding
All global objects ,functions and variables automatically become members of window object.
So,when defined in global scope ,'this' refers to the global window object.This is called the window binding.
* 2. Implicit Binding
When a function is invoked on an object ,'this' refers to that particular object.
* 3. Explicit Binding
Whenever JavaScript’s call or apply or bind method is used, 'this' is explicitly defined.
* 4. New Binding
In a constructor function ,'this' refers to the object created at that time using new keyword.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function langKnown(name) {
    console.log(this);
    return name;
}
langKnown("English");

// Principle 2

// code example for Implicit Binding
const myCar = {
    make: 'Toyota',
    model: 'Camry',
    year: 2018,
    getInfo: function () {
        return `My car is ${this.make} ${this.model} and is a ${this.year} model.`
    }
}
console.log(myCar.getInfo());
// Principle 3

// code example for New Binding
function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.getInfo = function () {
        return `My car is ${this.make} ${this.model} and it has ${this.color} color!`
    };
}
const car = new Car('Audi', 'Q6', 'black');
console.log(car.getInfo());
// Principle 4

// code example for Explicit Binding
const person = {
    name: 'Alex'
}
const skills = ['HTML', 'CSS', 'Javascript'];

function introduce(param) {
    return `My name is ${this.name} and my skills are ${param}`;
}
console.log(introduce.call(person, skills));