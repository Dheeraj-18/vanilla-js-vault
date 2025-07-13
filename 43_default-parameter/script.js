//                                 ====================================
//                                    default parameter ES6 feature
//
// Note: If we not pass the any of the argument in call of the function than in the calling function that parameter value is taken as undefined
//       eg. here we call multiply(6) then it return a NaN bcz in the function if calculate as 6 * undefined = NaN

// Note: the we put the default parameter using = operator , when we not pass that corresponding vale of the argument it take form default argument
//       value only that means default parameter only override the undefined value of the parameter .

// Note:In ES6 (ECMAScript 2015), default parameters were introduced in JavaScript. They allow function parameters to have default values 
// if no value or undefined is passed when the function is called.

// How It Works
// If the function is called without that parameter → default value is used.

// If the parameter is explicitly passed as undefined → default value is used.

// If the parameter is null → default value is NOT used (because null !== undefined).

//  -------------------------------------------------------------------------------------------------------------------------------

// function multiply(a, b) {
//   return a * b
// }

// using ES6 feature default parameter ..............................

// function multiply(a, b = 1) {
//   return a * b
// }

function rollADie(numberOfSides = 6) {
  return Math.floor(Math.random() * numberOfSides) + 1
}
