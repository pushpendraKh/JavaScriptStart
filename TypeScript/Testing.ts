console.log("Hello from TS")

let myString: string;

myString = "Hello! How are you?"

console.log(myString)

// Arrays:
let x: number[]
let y: Array<number>

x = [1,2,3,4]
y = [5,6,7,8]

let sum: number = x[0] + y[0]

// Tupple:
let newTupple: [string, number]

newTupple = ["First", 2]

let newerTupple: [string, number]

newerTupple = ["First", 1]

// Two ways of Type Casting
let message
message = 'abc'

let stringFunc = (<string>message).endsWith('c')

let stringFunc2 = (message as string).endsWith('c')


// Figure out the output:
var arr = ['aaa', 'bbb', 'ccc'];
var copy = [];
for (var index = 0; index < arr.length; index++) {
    copy.push(
        function (){
            return arr[index]
        }
    );
    console.log(copy)
}

for (var i = 0; i < copy.length; i++) {
    console.log(copy[i]())
}