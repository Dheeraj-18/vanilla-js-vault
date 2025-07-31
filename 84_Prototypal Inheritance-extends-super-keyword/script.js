//            Summary NOTES --->        Prototypal Inheritance (Using Extends and Super keyword)

// NOTE-1: 🔁 1. Prototypal Inheritance in JavaScript
//               JavaScript uses prototypes to implement inheritance. Every object in JS has an internal link to another object called its prototype, and it can access
//               properties/methods of its prototype — this is prototypal inheritance.

// NOTE-2: extends Keyword :->  Used to create a child class that inherits from a parent class.

// NOTE-3: 🧩 super Keyword
//             > Used inside child class constructors to call the parent class constructor.
//             > Also used to call methods of the parent class.

// 🔗 Prototype Chain (Definition):
//    Prototype chaining is a mechanism in JavaScript where objects inherit properties and methods from other objects via  their [[Prototype]]
//    (i.e., the internal link to another object).
//   > Every object prototype chain end on the object at last . 

// When you try to access a property or method on an object, JavaScript will:
//      1. Look for it on the object itself.
//      2. If not found, it looks on the object’s prototype.
//      3. It continues this chain until it finds the property or reaches the end of the chain — which is null.

// This chain of linked objects is called the prototype chain.

// NOTE-4: For Normal object there in no prototype chin , but when we see for the array or function they behind the seen are object so in thee prototype show array which
//         is come from array class constructor and so on ....

// NOTE-5: IF the property and method are same in child and parent class then , JavaScript always accesses the nearest property or method in the prototype chain.

// NOTE-6: 

class Person {
  live() {
    console.log('living')
  }
}

class User extends Person {
  constructor(firstName, lastName, age) {
    super()
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }
  work() {
    console.log('User is Working')
  }
  get fullName() {
    return `${this.firstName}  ${this.lastName}`
  }
  set fullName(value) {
    const [firstName, lastName] = value.split(' ') // we do Destructuring here
    this.firstName = firstName
    this.lastName = lastName
  }
}

class Student extends User {
  constructor(firstName, lastName, age, standard) {
    super(firstName, lastName, age)
    this.standard = standard
  }
  study() {
    console.log('studying')
  }
}

class Employee extends User {
  constructor(firstName, lastName, age, company) {
    super(firstName, lastName, age)
    this.company = company
  }
  work() {
    console.log('working')
  }
}

const student1 = new Student('Aman', 'Mishra', 32, 'BCA')
const employee1 = new Employee('Himmat', 'Singh', 72, 'Google')
