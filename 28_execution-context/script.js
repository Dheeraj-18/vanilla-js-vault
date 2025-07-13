//                                 Execution context in javascript
//                            ===============================================
//
// 1. Global execution context :Two part Memory creation phase and code execution phase
// 2. we also right call statement of the function before it's definition because in the memory creation phase in the global scope entire code is
//    store into variable of sayHii
// 3. when function is called it's create own local code execution context and after execution of this function is deleted form memory
// 

debugger
sayHi()
const userName = `Dheeraj`
const userAge = 22

console.log(userName)
console.log(userAge)

function sayHi() {
  const a = 9
  const b = 8
  addTwoNum(7, 9)
}

function addTwoNum(num1, num2) {
  return num1 + num2
}
