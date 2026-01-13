//                                   ___________________________________
//                                       for of  'vs' for in  loop in js
//                                        ________________________________

// Note-1: while we use for of loop
//        eg. for (variable  of  array_name or object_name){
//                         we use variable to access array
//                    }
//    we generally use singular variable_name against plural array name for eg. fruit against fruits named  array
//
// Note-2: We declare our variable using let or const bcz after the for of loop scope finished then is must be also not accessible otherwise
//          if we use var then it go in global scope and accessible outside the for of block scope
//
// Note-3: for of loop use for iterable object like array , sting ,map 
// Note-4: for in loop for object i.e key-value pairs 

//                           <<<<<<<<<<<<<<<<<<<<<<<<---------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>...

const fruits = ['banana', 'apple', 'orange', 'papaya', 'grapes', 'pineapple']

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

// console.log("***************************************");

// const user = `Dheeraj`
// for (const letter of user) {
//   console.log(letter)
// }

for (const fruit of fruits) {
    // debugger
  console.log(fruit)
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  eyecolor: 'blue',
  city: 'Bangalore',
}

//                   -------------------- This is not efficient way to loop our object i.e it's slow  ------------------------
for (const key in person) {
  // we are not able to use for of loop bcz object are not iterable
  console.log(key, ':', person[key]) // we using bracket notation to access keyed value otherwise console key give only keyname
}

//              *********************************** Efficient way to loop out object using for of loop **********************************

const personKeys = Object.keys(person) // this give a array having all person object keys
const personValue = Object.values(person) // this method give a array of value of object person 
const personEntries = Object.entries(person) // ** this method give array of array of entries 
for (const key of personKeys) {
  console.log(person[key])
}

