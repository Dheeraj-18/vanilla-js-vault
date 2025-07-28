//                                   OOPS (object oriented programming)

// NOTE-1: we see drawback of factory function earlier i.e function take memory in each object to avoid it use constructor function
// NOTE-2: Before see constructor function some other way also use .
//           > Define function globally and give a reference in each object

// NOTE-3: 'this' is keyword in js provided by browser , we can access it globally then it's points to the browser window object
//            > this is a keyword in JavaScript that refers to the object that is currently executing the function.

// NOTE-4: The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.
//          Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing
//          the same method to be reused on different objects.

// NOTE-5: Now, if we doing user1.getBirthYear === user2.getBirthYear return true because in memory it created only once not for each object

// NOTE-5 a) Here we solve the previous problem which occurs due to factory function with the use of this keyword by polymorphism i.e create a function onces and use
//           for each object .

// NOTE-6: Polymorphism
//         > Polymorphism means "many forms" — it's a core concept in object-oriented programming that allows objects of different
//           types to be treated as if they are of the same type.

// NOTE-7: But due to this we violet the Encapsulation and abstraction i.e we access the getBirthYear form global so we polluted the global space'

// NOTE-8: Now we know every function is behind the seem if object type so we can give a new property also

// NOTE-9: SO, with the use of these methods , giving commonMethods property to the function object and give in reference to the object using this
//         keyword here also user1.getBirthYear = user2.getBirthYear give true bcz it's create only onces in a memory
//            > ByDoing this we solve the problem of abstraction bcz now we can't access getBirthYear globally using function as object property
//                But drawback is we write more code for this
//            > Not for solving this Prototype comes into the picture

// NOTE-10: SO for solving this manually by function as object , javascript itself give a facility to handle by itself
//          > yes, we talk about the function Prototype property with the use of this we done automatically no need manual

// NOTE-11: On every function Object there is a property called prototype this value is object and on that object there is property called
//          constructor and that represent that function itself

// 'new' keyword , we know every function bydefault return a undefined if we not return anything , then even we return something and
//    > if we use new keyword before function it always return a object with the label name the name of function itself (name of the constructor fun
//          name of the function which create this object )
//         eg. new createUser()

//    >>> So , Definition  is clear when we call any function with the use of new keyword that function is called constructor function

//    > also remember that if not using new keyword and use 'this' keyword inside function that 'this' point to the window object and property are
//       created in the window object

//    > and inside there 'this' keyword also behave differently i.e when we use new keyword before function call it always return a object and inside the
//      function 'this' point to that object that function is created using new .

// NOTE--> IMP..: when we call function with the new keyword that that function inherit there prototype properties in the object they return
//                with the name __proto__ (in earlier browser now show in prototype) that property have same content which are in the function
//               prototype property that means we directly access  that methods which are in function prototype property i.e user1.getBirthYear
//                and also user2.getBirthYear
//      > and we achieve the Inheritance the prototype property and constructor function using new keyword
//      > when we call constructor function there is convention i.e we name that function with a capital letter i.e new CreateUser()

//      > and here user1.getBirthYear = user2.getBirthYear are true bcz it create only once in a memory

// NOTE : with the Help of Constructor function we create a object .

//

// CONCLUSION : we see all things are work fine but one weird thing is that we write all function in one place but for set the prototype
//              property we write code explicitly so for solving this problem
//          > Introduction of classes comes in the picture -

//
//       __________________________________________________________________________________________________________________________________________________________________

// function getBirthYear() {
//   return new Date().getFullYear() - this.age
// }

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     // getBirthYear: createUser.commonMethods.getBirthYear,
//   }
//   return user
// }

// createUser.commonMethods = {
//   getBirthYear() {
//     return new Date().getFullYear() - this.age
//   },
// }

// const user1 = createUser('Rishi', 'pandey', 34)
// const user2 = createUser('Raman', 'pandey', 34)

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

CreateUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age
}

CreateUser.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName
}

const user1 = new CreateUser('Rishi', 'pandey', 34)
const user2 = new CreateUser('Raman', 'pandey', 23)
