//                               ---------------- How to make Private class properties  -------------

// NOTE-1: when class return the object that with the help of these object we change the class property So , this accessible form outside the
//         class Previously developer use to highlight this property is private declare with using (underscore _ ) before the property,
//        just for convention (by doing this property doesn't make private it's just convention)

// NOTE-2: But new feature is arrived in the Js that we declare property using # before property name and also write it before the constructor
//         methods to make that property 'private' now the returning object not able to access the property from outside the class if we access
//         it outside the class it throw an error

// NOTE-3: Bydefault property of class are public that means we can accessible outside the class and modify by returning object, we make
//        them private using #

// NOTE-4: Way to make the  property and methods private inside the class
//          > make dynamic constructor methods property using #pro_name outside the constructor method and declare it inside the class as well.
//          > make static or hardcode property inside the class by using # before property name .
//          > TO make function private which declare inside the calls these go to the  prototype property of class (constructor fun) and object
//            also but by using # it becomes private and not go in prototype properties object Now, if we access function outside the class
//            it throw an error
//                > If we want to access methods inside the class use this keyword eg. this.#getFullName()

// NOTE-5: Can we make property private directly inside the object using # ?
//          > we not using # directly inside the object before property name it throw an error instead of these we use # inside the string .
//             eg. '#firstName': "Ram"
//          > and YES we can't access outside the object also that property eg. #firstName , So can we say we doing this why use of class 
//          > NO we access it by other way like a['#age'] = 34 but not access by dot operator 

// NOTE-6: WE NOT ACCESS PRIVATE PROPERTY OF CLASS BY ANY OF THE METHOD LIKE IN OBJECT. 

// class CreateUser {
//   #age
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.#age = age
//   }

//   #hi = 'Hello world ' // hardcode property in the returning object , make private using #before there name

//   getBirthYear() {
//     console.log(this.#hi)
//     console.log(this.#getFullName())
//     return new Date().getFullYear() - this.#age
//   }
//   #getFullName() {
//     return this.firstName + ' ' + this.lastName
//   }
// }

// const user1 = new CreateUser('Aman', 'Mishra', 32)
// const user2 = new CreateUser('Anurag', 'Singh', 72)

// user1.getBirthYear()
// user2.getBirthYear()

const a = {
  name: 'shriKant',
  '#age': 22,
}

// a.age       //  output -> undefined 
// a.#age      //  output -> error
