// Currying is a functional programming technique that transforms a function with multiple arguments into a series of functions that each 
// take a single argument. This allows for the creation of more specialized functions by breaking down the argument-handling process.

// Another Definition: Currying is the process of converting a function with multiple parameters into a chain of functions where each function
//                     takes exactly one argument and remembers the previous arguments using closures.


// currying function using bind() method

let multiply = function (x, y) {
  console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)

multiplyByTwo(7) // 14

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(8) // 24




// currying of function by using the concept of closure

let multiplyC = function (x) {
  return function (y) {
    console.log(x * y)
  }
}

let multiplyByTwoC = multiplyC(2)
multiplyByTwoC(4) // 8 

let multiplyByThreeC = multiplyC(3)

multiplyByThreeC(6) // 18
