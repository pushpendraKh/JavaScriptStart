// This is the object, that owns Javascript code

let object = {}

object = {
	name: 'Pushpendra',
	getName() {
		return this.name
	}
}

console.log(`${object.getName()}`) // This will work

let getNameFunction = object.getName
console.log(`${getNameFunction()}`) // looses this context, so will print undefined

// So bind this function to the object, so that it can get the context
let boundNameFunction = getNameFunction.bind(object)
console.log(`${boundNameFunction()}`)  // It works


// Another example

let person1 = {
	name: 'Pushpendra'
}

let person2 = {
	name: 'Ryon'
}

let log = function getUserName() {
	console.log(`${this.name}`)
}

log() // Will say undefined because of no context

let boundFunction = log.bind(person2)
boundFunction()


// WHY NOT WORKING -> FIXME
// let log1 = () => console.log(`${this.name}`)
// let boundFunction1 = log1.bind(person2)
// boundFunction1()


// CAll
let constantValues = {
	number: 23
}

function addNumbers(a,b,c) {
	console.log(this.number + a + b + c)
}

addNumbers.call(constantValues, 3,3,4) 

let bounded = addNumbers.bind(constantValues,3,4,4)
bounded()   // In case of bind, need to call the function too
