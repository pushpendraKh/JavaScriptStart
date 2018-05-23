//Object is a valute type containe key value pari

//object literal

var truck = {
    //properties
    'make':'Dodge',
    'wheels': 4
}

//Bracket Notation.
console.log(`I have a ${truck['make']} that has ${truck['wheels']} wheels`);

//Dot notation.
console.log(`I have a ${truck.make} that has ${truck.wheels} wheels`);

//Object literal 

//Create a variable and assign an object directly

var employee = {
    //properties
    'firstName':"ANsu",
    'lastName':"Jain",

    //Method
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};



//Object constructor function: If you have same type of objects. then you might use object costrutor function.

//Object constructor function 

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getFullDescription = function() {
        return `${this.year} ${this.make} ${this.year}`
    }
}


//Es6 enhanced object literal syntax
function CreateVehicle(make, model, year){
    return {make,model, year,
           getFullDescription() {
            return `${this.year} ${this.make} ${this.year}`
        }
    }
}

//Create new instances

let myTruck = Vehicle("Dodge", "Ran 1500", '2012');
let myCar = Vehicle("Dodge", "Ran 1500", '2013');
let myCycle = Vehicle("Dodge", "Ran 150", '2014');




//Es6 Objec literal syntax