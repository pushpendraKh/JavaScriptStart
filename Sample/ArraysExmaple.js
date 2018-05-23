
let grades = [1,2,3,4,5]

console.log(`${grades[1]}`)

// LENGTH
console.log(`length of array is ${grades.length} `)

// POP
console.log(`pop the last element is ${grades.pop()} `)
console.log(`array is ${grades} `)

// PUSH
grades.push(2,34,4)
console.log(`array is ${grades}`)

// SHIFT -> REMOVE FROM START
let shiftValue = grades.shift();
console.log(`array is ${shiftValue}`)

console.log(`array After shift is ${grades}`)

// UNSHIFT -> APPEND AT START
grades.unshift(shiftValue)
console.log(`array After shift is ${grades}`)

// CONCAT <-> LIKE PUSH just difference, concat return the appended array and push does in the same array
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,5]

let arr3 = arr1.concat(arr2, grades)
console.log(`array After shift is ${arr3}`)

// REVERSE
arr3.reverse()
console.log(`array After Reverse is ${arr3}`)

// SORT
arr3.sort()
console.log(`array After sort is ${arr3}`)

arr3.sort((a,b) => b-a)
console.log(`array After sort is ${arr3}`)

// SLICE
let slicedArray = arr3.slice(3)
console.log(`array After Slice is ${slicedArray}`)
