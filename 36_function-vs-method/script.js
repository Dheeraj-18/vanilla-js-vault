//                             =============================================
//                                    function vs method
//                               ===================================

// 👉 Every method is a function, but not every function is a method.

//         If it's inside an object → it's a method.

//         If it's outside on its own → it's just a function.

// we also think like we use some method use with string like touppercase() but string is not object yes it might confusing now but  we will that in 
// upcoming lecture actually is there a string wrapper in present 

const maths = {
  E: 2.718281828459045,
  add: function (a, b) {
    return a + b
  },
  square: function (num) {
    return num * num
  },
  // In ES6, when defining object methods like subtract, we don't need to assign a key explicitly.
  // We can define the method directly without using the function keyword.
  // This is called method shorthand syntax in ES6 — much cleaner and easier to read.
  subtract(a, b) {
    return a - b
  },
  cube(num) {
    return num * num * num
  },
}
