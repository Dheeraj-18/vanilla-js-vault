//                      ++++++++++++++++++++++++++++++
//                          Returning function with closure
//                              ++++++++++++++++++++++++++++++
//
// Note:1  Here parent function return add function so here parent function is Higher order function and in this case add function form a closure .
// Note:2 What is a Closure in JavaScript?
//          A closure is a function that remembers and has access to variables from its lexical (outer) scope, even after the
//          outer function has finished executing.

// In simple terms:
// A closure allows a function to "remember" variables from the place where it was created.

// Note for future Dheeraj:
// 'add' refers to the entire function itself — it's like an object holding the code.
// 'add()' means we're calling/executing the 'add' function.
// In JavaScript, functions are treated as objects, so we can pass 'add' around like any other value.

//    < --------------------------------------------------------------------------------------------------------------->

// const a = 4
// const b = 6

// Here parent() function is a Higher order function bcz it return another function
function outer() {
  const a = 4
  function parent() {
    const b = 6
    // function add() {                
    //   console.log(a + b)
    // }
    // return add                      // Here we return named function 
    return function () {               // Here we return anonymous function 
      console.log(a + b)
    }
  }
  return parent()
}

const add1 = outer()
console.dir(add1)
