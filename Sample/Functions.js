// Functions in JS are first class Object

function sayHi(name) {
	console.log(`Hi ${name}.`)
}

sayHi('Pushpendra') // Can be called before functions defination.

function addThreeNumber(a,b,c) {
	return a+b+c
}

console.log(addThreeNumber(1,2, 3))


// Function in a variable
var greet = function(name) {
	return `Hi ${name}.`
}

console.log(greet('Aditya'))

var greet = (function(name) {
	return `Hi ${name}.`
}('Pushpendra'))

console.log(greet)


/// For ES5, new syntax of fucntions that is Arrow Function =>

var greet = (name) => {
	return `Hi ${name}.`
}

console.log(greet('ES6 Aditya'))

// Optimzed Syntaz for one line return
var greet = (name) => `Hi ${name}.`
console.log(greet('ES6 Optimized Aditya'))