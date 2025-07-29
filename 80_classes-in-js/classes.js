//                               ---------------- Classes In Js -------------

// NOTE-1: classes in js nothing more like a syntactical sugar on constructor function
// NOTE-2: Remember one thing that every function have a property when we see in object formate using console.dir that is prototype and this
//         contain value i.e a object having multiple property and methods eg. constructor, we also set method and property that help to
//         achieve Inheritance in OOPS using constructor function .

// NOTE-3: when we typeof createUser is show a function actually classes are behind the seen is constructor function and when we console.dir(createUser)
//         it show in object formate and it also have 'prototype' property on it

// NOTE-4: But when we call createUser without using new keyword that it show error that 'class constructor cannot be invoked without using new
//         keyword .
//        > In the Normal Function when we call it using new keyword it become a constructor function and we also call it without using new
//          keyword but with the classes which is behind the seen are constructor function not give this looslyness it throw an error.

// NOTE-5: Now, when we call the class createUser function using new keyword then it also return a object with label same name of class

// NOTE-6: We also set like we do in previous in the case of constructor function i.e set prototype property its work well . But what's new

// NOtE-7: Yes, There is no need to set prototype properties of class (constructor function) explicitly we directly define inside the classes
//        it auto set on its prototype  property and also inherit to the object they return when we call it using new keyword

// NOTE-8: For setting the properties on the returning object inside the classes a 'constructor' function is provided , when we call class using
//         new a constructor function is run instantly with the calling and all other methods are goes in the prototype properties.
//            > we cannot allow to write any code of a single console statement outside the constructor methods write only function which go
//              to the prototype of class constructor function
//            > inside the class 'this' point the returning object which name label with the class name (constructor fun)

// NOTE-9:

class CreateUser {
  constructor(firstName, lastName, age) {
    ;(this.firstName = firstName), (this.lastName = lastName), (this.age = age)
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)

// user1.getBirthYear()
// user2.getBirthYear()
