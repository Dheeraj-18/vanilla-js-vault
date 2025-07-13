//                                         Scope In Javascript
//                                 ===================================
//             Global Scope : window (object) scope + script
// Note : whatever variable is declare with the var it  shows in window scope or any function also show in window scope and we can access with the dot
//        operator i.e window.a , window.add() but we can't access script variable with the use of window object it show undefined

// Note : whatever variable is declare with the use of let and const in showed in script scope
// Note: when ever a function is called it's local code execution context is generated and a this:{} object is also created in the local context

// =========================== Lexical and Block Scope =========================================

// 1. when we create a function inside a function ... then for the inside function all the outer global scope including itself is Lexical scope of that inner function
// 2. child function visible in local context of subtract only when we call it
// 3. whenever we use the outer function variable in the inner function then it formed closure with all these variable
// 4. when we declare the variable without let var const then that can be goes into window object and access globally to this not a good practice
//    declare variables to prevent we write in top of js file string i.e 'use strict' so that for that type of variable js engine through error

// NOTE :  Summary:
// a) Lexical scope means a function can access variables in the scope where it was defined.
// b) JavaScript uses lexical scoping (not dynamic).
// c) This behavior is the foundation of closures in JavaScript.

'use strict'

const userName = `Dheeraj`
let userAge = 22
var a = 50

// function add(){
//     const userName = 'Sumit'
//     const x = 5
//     const y = 8
//     console.log(x + y);
//     console.log(userName);
// }

function subtract() {
  debugger

  const x = 15
  const y = 18
  const z = 20
  console.log(x - y)

  function child() {
    const childName = 'Golu'
    console.log(childName)
    console.log(z)

    // {
    //   let and const are block scope outside the block where it's declare not accessible
    //   let num1 = 90
    //   const num2 = 34
    //   var num3 = 45
    // }

    // console.log(num3) // var is functional scope it can accessible outside the block where it declare
    function grandChild() {
      const grandChildName = `Molu`
      console.log(grandChildName)
    }

    grandChild()
  }
  child()
}

// add()
subtract()

console.log(`Program Ended !!`)
