//                =========================================
//                      Destructuring  in Javascript ES6 feature
//                     =================================

//   Destructuring in JavaScript (ES6):
//   Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into
//   distinct variables in a concise way.

// Note-1: we declare variables in destructing of array of object if not exist then it initialize with undefined value
// Note-3: Key Point : IN the js file if if empty even then a name variable exist with value of empty string .
// Note -4: we use Multilevel destructuring in objects
// Note-5: we Know behind the seem array is a object so for pick value form the mid or anywhere instead of using black comma we use this way .
//            eg. const { index of element : color4 } = colors
// Note-6: In case of array while we destructuring the element order matter but in case of object order not matter instead of this name of the
//         key matter
// NOte-7: Destructuring of object with function in parameter using { }

const colors = ['red', 'green', 'yellow', 'pink', 'black']

// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

// const [color1, color2, color3, color4] = colors  // Here we write more values than the original array colors in destructuring  then it initialize with undefined
// const [, , color3] = colors

const { 3: color4, 5: color5 } = colors

const user = {
  name: 'Anurag',
  age: 25,
  address: {
    city: 'Bangalore',
    state: 'Karnataka',
  },
}

// const name = user.name
// const age = user.age

const { name, age } = user // In the way while declare variable name must be same as key name .

// const { name: userName, age: userAge } = user   // IN this we have ability to name our variable whatever we want

// const {address: {city} } = user    // This is Multilevel Destructuring

// const {address} = user    // this not efficient for taking the city value we create a one more extra variable i.e address
// const {city} = address

function intro({ age, name }) {
  console.log(age, name) // output: red green pink
}

// intro(user)

// function printColor([a, b, , g]) {
//   console.log(a, b, g)
// }
function printColor({ 2: a, 3: b, 4: g }) {    
  console.log(a, b, g)                                   // output: yellow pink black 
}

printColor(colors)
