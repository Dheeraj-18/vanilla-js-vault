//                                         .......................................
//                                            some() and every() Array methods

// Note-1: some() method  work same we see earlier  for method forEach(), map()... i.e call each element for array
// Note-2: In the some() function if the atleast one element true return value than it return true and if all false than return false ,
//         and also if first encounter element return true value then it stop calling the function for other element of the array

//  My-thought : some() work like a logical OR operator in case of return values of callback function 

// Note-3: Exactly work same as every() method differ is it return true only when for all return value is true even if one is false then it return 
//         false and if it encounter first false return value not run the call back function for the rest of the array elements

// My-thought: every() work like a logical AND operator in case of return values of callback function 

//         < ----------------------------------------------------------------------------------------------------------------------------->

const evenNumber = [0, 2, 4, 6, 8]

// const result = evenNumber.some((num) => {
//     debugger
//   return num > 4
// })

const result = evenNumber.some((num, i) => {
  if (num % 2 === 1) {
    console.log(i)
  }
  return num % 2 === 1 // check is there any odd no. in our array
})
