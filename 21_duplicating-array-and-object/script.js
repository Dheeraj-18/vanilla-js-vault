//                        ==========================
//                     Right way to copy a object and array
//                  ===========================================

// 1): when we copy array just by assigning array into new variable then new array will created successfully and we add new item into it also with existing the copied items
//      but problem is that when we copy array and we change in the new array it also modify the prior one i.e array form which new array is copied . same senario with
//      Objects i.e same variable point the same memory location

// 2): but when we done same with primitive type it does not behave like that for eg. when we create a const userName = 'Dheeraj' then for the value 'Dheeraj' address
//       it generated in the memory and then assign to userName= @2345 and then after that we create new variable  let userName2 = 'Dheeraj' not the same address is
//       assign to userName2 i.e @2345 Not , when we change it like userName2 = userName2 + 'Sharma ' in memory new address it generated for that new created string
//       and previous userName value not change like in array and object .

// 3): object.assign(user2,user1) by using this method we copy the user1 array into user2 and now new address give to user2 and changes done in the
//       user2 not reflected in user1. [BUt this method is too old before ES6]

// 4): {...user2} Using Spread operator Introduce in ES6

// 5): another way to copy array using concat() , slice() but mostly in Industry code Spread operator is used 

// 6)IMP: with the use of object.assign() or spread operator{...} , [...] we only Shallow copy i.e A shallow copy creates a new object, but nested
//  objects/arrays are still referenced, not cloned. This means changes to nested properties in the copy will also reflect in the original object.

// NOTE: using object.assign() or spread operator we done only Shallow copy
//      Shallow copy : A shallow copy creates a new object, but nested objects/arrays are still referenced, not cloned. This means changes to
//                     nested properties in the copy will also reflect in the original object.

// NOTE: we done deep Copy using Json or structuredClone() 
//       deep copy : A deep copy creates a completely independent clone of the object, including all nested objects and arrays. Changing the copy
//       does not affect the original.
//            const original = { a: 1, b: { c: 2 } };
//            const copy = JSON.parse(JSON.stringify(original));
//
//                                           < ---------------------------------------------------------------------> 

// const userName = 'Dheeraj'
// let  userName2 = userName;
//  userName2 = userName2 + 'sharma'

const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits  // this is not a copy at all just assign the address to another variable

// myFruits.push('Dates')
// myFruits.push('Grapes')

// Object.assign(myFruit,fruits)   // old way to copy array into another array use before ES6 (object.assign() use in mostly with object)

// const myFruit =[...fruits] // Spread operator Introduce in ES6

// const myFruit = [].concat(fruits)  // another way to copy array into another array

const myFruit = fruits.slice() // slice() method doesn't modify the original array and when no argument pass give entire array as it is

const user1 = {
  firstName: 'Dheeraj',
  lastName: 'Saraswat',
  pata: {
    city: 'Aligarh',
    pincode: 202001,
  },
  subjects: ['physics', 'CS', 'Math'],
}

// const user2 = user1

// user2.lastName = 'Sharma '
// user1.firstName = 'Sumit'

// const user2 ={}

// Object.assign(user2,user1) // this method is old use before 2015 before ES6

const user2 = { ...user1 } // This is spread operator Introduce in ES6 now copy the object user1 in user2
