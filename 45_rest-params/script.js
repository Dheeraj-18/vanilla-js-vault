//                             -------------------------------------
//                                      Rest params
//                                 -----------------------
// Statement:  Rest Parameter in JavaScript (ES6)
//            The rest parameter allows a function to accept an indefinite number of arguments as an array. It is written using
//            three dots ... followed by the name of the parameter.

// Note-1: rest params are used while the time of defining the function and taking the parameter into it .
// Note-2: We can say Rest params are the replacement (alternative) of the argument keyword.
// Note-3: with the use of rest params we take any no. of argument in our function and rest params create a array of all these params(...array_name)
// Note-4:Key Points:
//       a) Collects all remaining arguments into a single array.

//       b) Only one rest parameter is allowed in a function.

//       c) It must be the last parameter in the function definition.

//   <-------------------------------------=====================================-------------------------------------------------->

const nums1 = [1, 2, 3, 4]

// function add(a, b, ...nums) {   // Here using rest parameter
//   let sum = 0
//   console.log('nums :', nums)
//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i]
//   }
//   return sum
// }

function add(...nums) {
  // Here using rest parameter
  return nums.reduce((acc, curr) => acc + curr)

    //   return [...arguments].reduce((acc, curr) => acc + curr)   // argument not work with array method so we convert argument into array here
  // by using spread operator
  //   return Array.from(arguments).reduce((acc, curr) => acc + curr)   another way to covert argument into array
}

const result = add(...nums1) // use spread operator
