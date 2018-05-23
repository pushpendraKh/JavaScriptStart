// FOR LOOP

let array = [1,2,3,54,5]

array.forEach((value) => {
	console.log(value)
})


var playWithArray = {

	array: [1,2,4,5,6],

	sumOfArray() {
		let sum = 0
		this.array.forEach(value => sum += value)
		return sum
	},

	avg() {
		return (this.sumOfArray() / this.array.length)
	}
}


console.log(`${playWithArray.sumOfArray()}`)
console.log(`Avg of numbers ${playWithArray.avg().toFixed(2)}`)

// Round of function -> .toFixed(0) 
// If number is greater than 4.5 it will print 5, if it is less than 4.5, will print 4

// .toFixed(1) -> Print 4.5
// .toFixed(2) -> Print 4.50

// MAP
let addOneArray = playWithArray.array.map((value) => value + 1)
console.log(`${addOneArray}`)

// FILTER -> Will return all matches
let arr1 = [2,2,3,1,3,1]
let filteredArr1 = arr1.filter((value) => {
	return value === 1
})
console.log(`Filtered Array is ${filteredArr1}`)

// FIND -> Will return the first match
let arr2 = [2,2,3,1,3,1]
let filteredArr2 = arr1.find((value) => {
	return value === 1
})
console.log(`${filteredArr2}`)

// EVERY ... Will check if every value meets the condition, then return true

let arr3 = [false, true, false]

let filteredArr3 = arr3.every((value) => {
	return value === true
})
console.log(`${filteredArr3}`)

// SOME - Check for every property, if any one meets requirement, returns true
let filteredArr4 = arr3.some((value) => {
	return value === true
})
console.log(`${filteredArr4}`)

// Reduce, pass the start value and iterate the whole array and perform the function and return the result
let arr5 = [1,2,3,4,5]
let sumOfArray = arr5.reduce((sum, value) => sum + value,0)
console.log(`${sumOfArray}`)
