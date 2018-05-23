
function KnowAboutPerson(name, age, hobby) {
	this.name = name;
	this.age = age;
	this.hobby = hobby;

	this.getDescription = function() {
		let description = `Hi ${this.name}!. You age is ${this.age} and yes, you are awesome. Your hobby is ${this.hobby} `
		return description
	}
} 

var personInfo = new KnowAboutPerson('Pushpendra', 21, 'Flute')
console.log(personInfo.getDescription())

// Another way to write in ES6

function knowAboutPersonWithES6(name, age, hobby) {
	return {
		name,
		age,
		hobby,
		getDescription() {
			let description = `ES6: Hi ${this.name}!. You age is ${this.age} and yes, you are awesome. Your hobby is ${this.hobby} `
			return description
		}
	};
} 

 var personInfo = new knowAboutPersonWithES6('Pushpendra', 21, 'Flute')
console.log(personInfo.getDescription());
