let letVar = 'let var';
// Will throw error, can assign with same variable name "letVar" 
//let letVar = 5;
console.log(letVar);

var variable = 'Variabe';
// Won't throw any error even if variable name is same "variable"
var variable = 5;
console.log(variable);

var firstName = "Pushpendra";
let lastName = "Khandelwal";

// Output of following are same
console.log(firstName + ' ' + lastName); 
console.log(firstName, lastName);

// It is available only for ES6 -> Triple String
console.log(`${firstName} ${lastName}`);

// Constant cant not be changed
const constantName = "Sun";
// Will throw a TypeError: Assignment to constant variable
constantName = "Ravi";