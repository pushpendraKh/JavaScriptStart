

function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return `${firstName} ${lastName}`;
    }
}


var user1 = new User("ansu", "jain")
var user2 = new User("Ankit", "jain")

console.log(user1.getFullName(), user2.getFullName())


class ClassUser{

    constructor(name){
        this.name = name;
    }

    getFullName() {
        return `${this.name}`
    }
}

let user3 = new ClassUser("Abc");

console.log(user3.getFullName());