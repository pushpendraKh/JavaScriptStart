var Colours;
(function (Colours) {
    Colours["red"] = "I like the colour red";
    Colours["blue"] = "I love the colour Blue";
    Colours["green"] = "Green is an odd colour";
})(Colours || (Colours = {}));
console.log(Colours.blue);
var defaultEnumVal;
(function (defaultEnumVal) {
    defaultEnumVal[defaultEnumVal["one"] = 0] = "one";
    defaultEnumVal[defaultEnumVal["two"] = 1] = "two";
    defaultEnumVal[defaultEnumVal["three"] = 2] = "three";
    defaultEnumVal[defaultEnumVal["four"] = 3] = "four";
})(defaultEnumVal || (defaultEnumVal = {}));
console.log("Value of defaultEnumVal One is: " + defaultEnumVal.one + " because index starts from 0.");
// Enums can be used as types as such:
var colourType = Colours.red;
console.log(colourType);
var colourRed = Colours[colourType];
console.log(colourRed);
var colourRed2 = Colours[Colours.red];
console.log(Colours[colourRed2]);
