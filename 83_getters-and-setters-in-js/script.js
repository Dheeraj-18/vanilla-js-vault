//                    ------------------------  getters and setters in Js ---------------------------

// NOTE-1: we use getters and setters  in normal object and use in classes as well mostly used in classes
// NOTE-2: when we define function inside object like fullName and we change form outside it changes and become a normal property after that we call it throw error,
//        and we not set other properties inside function dynamically .
// NOTE-3: IN JS we have two keywords 'get' and 'set' to help make properties getter and setter
// NOTE-4: when we set any property inside object using 'get' it's show's on console in user i.e (....) this formate and when we hover on that it show (invoke property getter)
// NOTE-5: So if we set any function as getter property using get then we not call by traditionally way like fullName() it through error instead of this we call it
//         using only do operator
// NOTE-6: after make property getter we call this function without parenthesis if we call that function with parenthesis () it through an error we call it our use it like
//         normal object property and it work eg. user.fullName (it automatic call that function )
// NOTE-7: Similarly with setters we set the data as normal property even this setters property is function but yes it work no need of traditional way to set the value
//         by passing argument ans take parameter etc.....  set like normal property eg. user.fullName = "Himmat singh"
//        > taking this value in the set function as a argument and spilt this string into array and change the property dynamically

// NOTE-8: we Mostly use this getters and setters properties with the classes

class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
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

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Himmat', 'Singh', 72)

//                     <<<<<             Using getter ans setters with object           >>>>>>>>>>>

// const user = {
//   firstName: 'Ram',
//   lastName: 'sharma',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}` // Here 'this' refer to the object user
//   },
//   set fullName(value) {
//   //  const splitted = value.split(' ')
//   //  this.firstName = splitted[0]
//   //  this.lastName = splitted[1]
//   // ___________________________________________________-
//    const [firstName , lastName] = value.split(' ')        // we do Destructuring here
//    this.firstName = firstName
//    this.lastName = lastName

//   },
// }

// console.log(user.fullName)

// user.fullName = 'Himmat Singh'
