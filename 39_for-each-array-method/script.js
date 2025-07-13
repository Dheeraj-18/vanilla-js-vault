//               <------------------------------------------------------------>
//                       forEach() array Method

// Note-1: forEach() method and yes its a function which access by . operator because it's a  method
//         a) It's a higher order function take a  function as a argument i.e callback fun
//         b) this callback function called no of elements time in the array  (jitney element hai array main forEach() utni baar call karega  )
//         c) forEach() function value is always undefined we return in our callback func but forEach is implicitly define that why it's method
//

const fruits = ['apple', 'banana', 'grapes', 'orange', 'melon']

// for of loop
// for(const fruit  of fruits){
//     console.log(fruit);
// }

// fruits.forEach(function (fruit) {
//   console.log(fruit)
// })

fruits.forEach((fruit) => {
  console.log(fruit)
})
