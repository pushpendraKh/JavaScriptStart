enum Colours {red = "I like the colour red", blue = "I love the colour Blue", green = "Green is an odd colour"}

console.log(Colours.blue)

enum defaultEnumVal { one, two, three, four}

console.log(`Value of defaultEnumVal One is: ${defaultEnumVal.one} because index starts from 0.`)

// Enums can be used as types as such:

let colourType : Colours = Colours.red

console.log(colourType)

let colourRed = Colours[colourType]

console.log(colourRed)

let colourRed2 = Colours[0]

console.log(colourRed2)