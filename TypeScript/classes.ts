interface UserInterface {
    name: string
    email: string
    age: number
    register()
    payInvoice()
}

class User implements UserInterface {
    name: string
    email: string
    age: number
    constructor(nameValue: string, emailValue: string, ageValue: number) {
        this.name = nameValue
        this.email = emailValue
        this.age = ageValue

        console.log(`${this.name} is a new User`)
    }

    register() {
        console.log(`${this.name} is now registered`)
    }

    payInvoice() {
        console.log(`${this.name} paid invoice`)
    }
}

class Member extends User {
    id: number

    constructor(idValue: number, nameValue: string, emailValue: string, ageValue: number) {
        super(nameValue, emailValue, ageValue)
        this.id = idValue
    }

    payInvoice() {
        super.payInvoice()
    }
}

let mike: User = new Member(1, "Mike Traynor", "mike.traynor@gmail.com", 22)
mike.register()
mike.payInvoice()