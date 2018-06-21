console.log("Hello from TS");
var myString;
myString = "Hello! How are you?";
console.log(myString);
// Arrays:
var x;
var y;
x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
var sum = x[0] + y[0];
// Tupple:
var newTupple;
newTupple = ["First", 2];
var newerTupple;
newerTupple = ["First", 1];
// Two ways of Type Casting
var message;
message = 'abc';
var stringFunc = message.endsWith('c');
var stringFunc2 = message.endsWith('c');
// Figure out the output:
var arr = ['aaa', 'bbb', 'ccc'];
var copy = [];
for (var index = 0; index < arr.length; index++) {
    copy.push(function () {
        return arr[index];
    });
    console.log(copy);
}
for (var i = 0; i < copy.length; i++) {
    console.log(copy[i]());
}
