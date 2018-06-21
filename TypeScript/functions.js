function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum("1", 2));
function getSumTS(num1, num2) {
    return num1 + num2;
}
console.log(getSumTS(1, 2));
// console.log(getSumTS("1",2)) Gives an error cause it's in TS
var sum = function getSumTS(num1, num2) {
    return num1 + num2;
};
// Just like in Swift
console.log(sum(1, 2));
var sum2 = function getSumTS(num1, num2) {
    if (typeof num1 == 'string') {
        console.log("num1 is string type\nhence converting to Int: " + num1);
        console.log(parseInt(num1));
    }
    return num1 + num2;
};
// Just like in Swift
console.log(sum2("1", 2));
function getFullName(firstName, lastName) {
    // return firstName + ' ' + lastName
    return firstName + " " + (lastName || '');
}
console.log(getFullName("John"));
console.log(getFullName("John", "Belion"));
