// < -------------------------------------------------Object (primitive data type) --------------------------------------->
// Note-1: IN object Key value pair is stored
// Note-2: Here we can create two object(even empty) and having a same values and variables but when we compare both i.e user1 === user2 then it give
//         false bcz it compare on reference basis SO when we compare two object it compare there address of objects
// Note-3: when we compare in reference data type it compare the address of the value which stored in variable  not value
// Note-4: object keys are behind the seen are treated as string we can also declare in string formate like 'firstName':'Dheeraj'
//         eg. if we want to name the key like that last-name we can not give(through error)without using string so here we give in the string key
//         formate like that 'last-name':'sharma'
// NOTE_4 a) using bracket notation we can do multiple thing user[" "] inside the bracket we can put any javascript variable also
// NOTE-5: those variable not present in directly in objects when we access by dot operator give undefined in output
// NOTE-7: we access the other variable which is not present in object using [" "] bracket formate of object key and the variable value will same
// NOTE-8: whenever we create new {} in the object new memory address will assign for that object

const myName = 'Dheeraj'

const username1 = ''
const username2 = ''

const user1 = {
  firstName: 'Akash',
}
// const user2 = {
//   firstName: 'Adarsh',
//   lastName: 'sharma',
//   Dheeraj:'developer'

// }

// console.log(user2.lastName); // NOTE: one way to access the object variable dot notation
// console.log(user2['lastName']); // NOTE : another way to access the object variable using bracket
// console.log(user2.Dheeraj);
// console.log(user2[myName]);
// console.log(user2["first"+"Name"]);

const user2 = {
  firstName: 'Adarsh',
  lastName: 'sharma',
  address: {
    city: 'Aligarh',
    pinCode: 202001,
    state: 'Uttar-pradesh',
    moreDetails: {
      population: 7873937,
      area: '34 sq km',
    },
  },
}

user2.age = 22
user2['is-student'] = true

console.log(user2.address.city) // access object of object
