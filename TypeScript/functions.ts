function getSum(num1, num2) {
    return num1 + num2
}

console.log(getSum("1",2))

function getSumTS(num1: number, num2: number) : number {
    return num1 + num2
}

console.log(getSumTS(1,2))
// console.log(getSumTS("1",2)) Gives an error cause it's in TS

let sum = function getSumTS(num1: number, num2: number) : number {
    return num1 + num2
}
// Just like in Swift

console.log(sum(1,2)) 

let sum2 = function getSumTS(num1: any, num2: any) : number {
    if (typeof num1 == 'string'){
        console.log(`num1 is string type
hence converting to Int: ${num1}`)
        console.log(parseInt(num1))
    }
    return num1 + num2
}
// Just like in Swift

console.log(sum2("1",2)) 

// Optional Params
function getFullName(firstName: string, lastName?: string) : string {
    // return firstName + ' ' + lastName
    return `${firstName} ${lastName || ''}`
}

console.log(getFullName("John"))
console.log(getFullName("John", "Belion"))

// Arrow Functions
// variable = (params) => function definition

let doLog = (name: string) => {
    name += " learning TypeScript"
    console.log(name)
}

console.log(doLog("I am"))