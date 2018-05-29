let array = [1,2,3,4,5]

let sumOfArray = () => {
	console.log('Does sum of array')
}

let avgOfArray = () => {
	console.log('Calculates avg of array')	
}

// module.exports.array = array
// module.exports.sumOfArray = sumOfArray
// module.exports.avgOfArray = avgOfArray

// OR 
// ES5 Style
module.exports = {
	array: array,
	sumOfArray: sumOfArray,
	avgOfArray: avgOfArray
}

// ES6 Style
export let variable = 34