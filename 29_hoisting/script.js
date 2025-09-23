//                                 ================================
//                                   Hoisting is javascript?  Interview Question
//                                        ===============================================

// NOTE-1: As we see the javascript code are executed in the two phases One is Memory execution phase or second Code execution phase.
// NOTE-2: IN the Memory creation phase phase memory is allocated for the variable and all the variable are initialize wth the value undefined
//         which is using var keyword other are unavailable i.e go on TDZ not accessible before initialization 

// Hoisting :when we try to access the variable , classes , function before it's declaration and it does not through error then we say these variable
//           are hoisted
//            a) let and cost variable are also hoisted but because of the javascript feature it put the let and const variable in the Temporal dead
//               zone (TDZ) form where we can't access before it's initialization

// Everyone know's definition : Hoisting in JavaScript
// Hoisting refers to the behavior in JavaScript where variable and function declarations are moved to the top of their scope (script or function)
// during the compilation phase, before the code is executed.

//                            <----------------- Function expression vs function declaration (interview question )

// Note- 3: Function Expression : we can define with the use of variable const in this case in memory creation phase entire code is not store in the
//                                variable sayhii only undefined or in the script if we use const or let so in this definition our function is not
//                                Hoisting
// NOTE-4 Function Declaration :  It is tradition way to define the function in this case in the memory creation phase entire code of function are store in the
//                                variable sayhii , so it hoisted

// Note- 5 when we define a function without given there name then that part of the function called name as anonymous function
//         eg. = function(){
//                   console.log('hello');
//                    }

//             <----------------------------------------------------------------------------------------------------------->
//                      we learn three thing form this lecture
//  1. Hoisting
//  2. Function Expression
//  3. Anonymous Function

console.log(userName)

var userName = 'Dheeraj'

sayHii()

// function definition
// function Declaration
function hii() {
  console.log('Hii')
}

// function definition
// Function Expression
const sayHii = function () {
  // This definition of function in not hoisted
  console.log('hello')
}

// const sayHii = function hello (){  // No matter we write again name of function hello js engine ignore it and if  we access with hello it show error of not defined
//     console.log('hello');

// }
