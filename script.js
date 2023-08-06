// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}

Person.prototype.greet= function(){
	console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}

function Employee(name, age, jobTitle) {
	this.name=name;
	this.age=age;
	this.jobTitle=jobTitle;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee;
Employee.prototype.jobGreet=function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
}
const person1 = new Person("Alice", 25);
const employee1 = new Employee("Bob", 30, "Manager");

person1.greet();          // Output: Hello, my name is Alice, I am 30 years old.
//employee1.greet();        // Output: Hello, my name is Bob, I am 25 years old.
employee1.jobGreet(); 
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
