let grades = [92,90,45,98];

console.log(`${grades[0]}`);

let myStuff = ['baseball', 'football', 34,23, true];

console.log(myStuff.length);

console.log(myStuff.pop());
console.log(myStuff.length);


myStuff.push("true");
console.log(myStuff.length);


grades.map(value => {
    console.log(value);
});

let newArray = grades.filter(value =>  value > 50 );
console.log(newArray.length)

for (var grade of grades) {
    console.log(grade)
}