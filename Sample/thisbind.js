// let hotRod  = {};

// hotRod = {
//     'sound': "abc",
//     soundoff: function() {
//         return `${this.sound}`
//     }
// }

// console.log(hotRod.soundoff());

// let lossBind = hotRod.soundoff;  //this loses it's context;

// console.log(lossBind());

// //we can bind the funciton 

// let boundSoundFunction = lossBind.bind(hotRod);

// console.log(boundSoundFunction());


let person1 = {
    'name': "joe"
};

let person2 = {
    'name':"jane"
};

function getName() {
    console.log(this.name);
}

getName() //will print undefined

getName.bind(person1)();


getName.call(person1);