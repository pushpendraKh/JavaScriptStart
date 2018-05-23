
const adultAgeBar = 18

var Person = {
	name: 'Ryon',
	age: 17,

	checkIfPersonIsAdult: function() {
		return (this.age >= 18)
	},

	differenceInAge() {
		return (adultAgeBar - this.age)
	}
}



let checkForAdult = Person.checkIfPersonIsAdult()

if (checkForAdult) {
	console.log(`${ Person.name } is adult`)
} else {
	//let differnceInAge = adultAgeBar - `${Person.age}`
	console.log(`Alas! ${ Person.name }, you need to wait for ${Person.differenceInAge()} more year`)
}