//                                   OOPS (object oriented programming)

// Note-1: Angular based on object oriented programming In earlier react was also based OOps but now react totally shift on functional programming
// Note-2: Four Pillars of OOps
//         > Encapsulation - Encapsulation in JavaScript (and in general Object-Oriented Programming) refers to the concept of binding data (properties) 
//                           and methods (functions) together within an object and restricting direct access to some of the object’s internal components.

//         > Abstraction  - Abstraction is the process of hiding the complex implementation details and showing only the 
//                          essential features of an object or function.
//         > Inheritance
//         > Polymorphism

// There is no private or public ... identifier for data hiding in javascript bydefault in js oject are mutable until we make explicitly immutable
// Note-3: New feature in JS i.e when key and value have same name then we directly put the key in the object
//         eg. user = {
//                       firstName,
//                       lastName,
//                        age,
//                  }
// Note-4: Same New feature with the function inside object we directly write function without using (colon : ) and function keyword
//         Used in user1
//
// Note-5: 🏭 What is a Factory Function?
//            A factory function:
//            > Is a regular function (not a class or constructor).
//            > Creates and returns a new object.
//            > Encapsulates logic to generate object instances. (Helps achieve encapsulation.)

// Note-6: But here is a problem that same getAgeYear function take memory in each object even they work same . 

// NOTE- SOLUTION: with the Constructor function we solve this problem

//       __________________________________________________________________________________________________________________________________________________________________

// const user1 = {
//   firstName: 'Himmat',
//   lastName: 'Singh',
//   age: 25,
//   getAgeYear() {
//     return new Date().getFullYear() - user1.age
//   },
// }

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear() {
      return new Date().getFullYear() - user.age
    },
  }
  return user
}

const user1 = createUser('Rishi','pandey',34)
const user2 = createUser('Raman','pandey',34)