//                                      Static Property and Method

// NOTE-1: with the use of 'static' keyword we declare some property static  inside the class which are not shown on object they return
//         SO , these properties are directly on a class we can access by class name with dot operator
//          eg, CreateUser.hii
//        > we also set without using static keyword outside the class directly e.g CreateUser.hii = 'Namaste'.
//            Just for clean syntax we use it inside the class . using static keyword

// NOTE-2: These static property and static methods are not accessible by the user object which are return by class . and also now shown on that
//        object .
//        > all static property are not goes into the prototype i.e also not inherit into the returning object .

// NOTE-3: we also have a  static block in which we declare any property and methods and write code
//         > inside the static block the declare variable are accessible only inside the class if access from globally it throw error not defined
//         > and the code inside the static bock run automatic without calling the class (constructor function)
//         > Inside the static block 'this' keyword points to the class (not returning object by class)
//
//
//

class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  // static hii = 'Hello'
  static {
    console.log(this)
    this.hii = 'Hello'
    this.getFullName = function () {
      return this.firstName + ' ' + this.lastName
    }
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }
  // static getFullName() {
  //   return this.firstName + ' ' + this.lastName
  // }
}

// CreateUser.hii ="Namaste"

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)
