//                                         .........................................
//                                                 argument keyword in javascript
// Statement: In JavaScript, arguments is a special array-like object that is available inside all non-arrow functions. It contains all the 
//            arguments passed to the function, regardless of the function's defined parameters.

//  

// Note-1: argument have a array like structure but we not called it array bcz on in we not apply array methods .
// Note-2: In the argument all argument pass to the function store in the arguments which can be access by index just like array
//         eg. argument[0]
// Note-3: Not work with arrow function
// Note-4: there is a length property in argument 
// 
//



//                .................................................................................................................





// function add(a, b) {
//   console.log(arguments);
//   return a + b
// }

// function add() {
//   let sum = 0;
//   for (let i = 0; i <= arguments.length -1; i++) {
//     sum += arguments[i]
//   }
//   return sum
// }

const add = function () {            // argument also work with the function expression but with arrow func show error 
  let sum = 0;
  for (let i = 0; i <= arguments.length -1; i++) {
    sum += arguments[i]
  }
  return sum
}
