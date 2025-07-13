//                                                     =========================================
//                                                        ... spread operator in JS ES6 Feature 
//                                                                  ======================

// Statement: The spread operator (...) in JavaScript ES6 is a powerful and concise syntax used to expand iterable elements like arrays, objects, or strings 
//            into individual elements. It is commonly used in functions, array manipulation, and object cloning.

// Note-1:  we use spread operator with array to copy array or concatenate multiple array . 
// Note-2: we also use with string also like in our code we spread out string into array 
// Note-3: we also use to copy object (shallow copy ) i.e first level copy only nested object are not copied properly they are referenced 
// Note-4: we also use spread operator with function Pass array elements as individual function arguments. we done this while calling a function 
//         a) while using spread operator to pass argument only spread iterable like, sting and array 
// 






const nums1 = [1, 2, 3, 4]
const nums2 = [5, 6, 7, 8, 9]

// const joinedArray = nums1.concat(nums1, nums2)

// const myName = 'Dheeraj'

const joinedArray = [...nums1, ...nums2]

const user = {
  name: 'Dheeraj',
  age: 22,
}

const updateUser = { ...user, city: 'Mumbai' }

function add() {
  let sum = 0
  for (let i = 0; i < arguments.length - 1; i++) {
    sum = sum + arguments[i]
  }
  return sum
}

console.log(add(...joinedArray));  // Here all the array element are spread as individual argument (element )