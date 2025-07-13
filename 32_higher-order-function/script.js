//                                                      =====================================
//                                                            Higher Order functions
//                                                       =============================
//  Higher order function: A higher-order function is a function that does one of the following:
// a) Takes another function as an argument.
// b) Returns another function as its result.

// A callback function is a function that is passed as an argument to another function and executed later.

// a) A function can accept another function as a parameter.
// b) Callbacks allow one function to call another at a later time.
// c) A callback function can execute after another function has finished.
//        < ---------------------------------------------------------------------------------------------------------------------------------------------->

//  NOTE-1: when we check the typeof of function it show function i.e there is no type function exist in the javascript  but behind the seen its a non-primitive type we
//          can check in dev tools and also by console.dir() show object

//  Note-2: when we console.log(a) then it show only code of a function so we use console.dir(fun_name) give a type object bcz behind the seen function is object type

// Note-3: Because function is object behind the seen so that we store in a variable bcz a object treated as value so we can store in a variable  as we see early by
//         doing function expression
// Note-4: so function is behind the seen object so we can pass in the function and return it also from the function
// Note-5: console.dir() is print of console normal variable and  also those who behind the seen work  as a type object .
// Note-6: we also pass directly function as a argument without naming i.e anonymous function 
//

// *** Here a is a Higher order function
function a(b) {
  console.log(b)
  b()
}



//  this doesn't show our function is object type
console.log(a);

console.dir(a)

function sayHii() {
  console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiii')
}  

const x = sayHii // here x work as x() we see already in function expression


a(sayHii)    // here sayHii is a callback function 




// here this argument passes function is a callback function 
a(function () {
  console.log(`Hiiiiiiiiiiiiiiiii`)
}) 
