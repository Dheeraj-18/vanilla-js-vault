//                              ===========================================
//                                 map() reduce() filter()  array methods
//                                  ===========================================

// Note-1: we see the forEach() method there no return value it always return undefined .
//         a) Here in map() method all think are same i.e function which passed called no of element times in array .
//         b) and return a array containing a return values when each time call the function (each time call ki return values ka array return kerta hai)
//
// Note-2: map() return a new array not modify the original array
//         a) All these are a Non-destructive  methods
//         b) we give second argument in the arrow function, give access to index of array and this facility also in forEach() method
//         c)) with the third argument give array ,map() or forEach() was called upon
//         d) all parameter  are optional in forEach() or map() but if we not give it run i.e call no. of element time in array
//          e ) array.forEach( function (currentValue, index, array)

// Note-3: ** Returning array i.e filterMonths and the parameter array i.e month are not equal both are created at different location .
//
// Note-4: filter() method take for the returning array value all or less than  form original array i.e month ,create a array to return . Now question is how it decide which value is taken
//         or not .
//         a) which value is taken it from the returning array decide upon that return value if it's true it return all value same as months .
//            if false then return empty array .
//         b) based upon the return condition filter will decide which value is taken in the returning array
//         c) map() doesn't care the about the return value is true of false whatever the condition based upon that return it.
//
// Note-5: map(callback function ) 


const months = ['January', 'February', 'March', 'April', 'May', 'December']

// console.log(
//   months.map((month) => {
//     console.log(month)
//     return month.toUpperCase()
//   })
// )

// const capitalMonths = months.forEach((month, index) => {
//   console.log(index + 1, month)
//   return month.toUpperCase()
// })

// const capitalMonths = months.map((month, index, array) => {
//   console.log(index + 1, month)
//   console.log(array)
//   return month.toUpperCase()
// })

//                           ................................. filter(function(current_value, index , array )).....................

// const filterMonths = months.filter((month, index, array) => {
//   //   console.log(month)
//   //   console.log(array)
//   //   return month.length <= 5
//   console.log(month.toLocaleLowerCase().includes('m'))
//   return month.toLocaleLowerCase().includes('m')
// })

const students = [
  {
    name: 'Akash',
    age: 21,
  },

  {
    name: 'Adarsh',
    age: 17,
  },

  {
    name: 'Amir',
    age: 18,
  },
  {
    name: 'Raman',
    age: 23,
  },
  {
    name: 'Nidhi',
    age: 16,
  },
]

const adultStudents = students.filter((Student) => {
  return Student.age >= 18
})

// adultStudent contain a returning array which return by filter method

const adultStudentNames = adultStudents.map((student) => {
  return student.name
})

// we directly write inShort  ----------------------------> THE Below code is chaining of array methods
const adultStudentNames2 = students
  .filter((Student) => {
    return Student.age >= 18
  })
  .map((student) => {
    return student.name
  })

const adultStudentNameA = students
  .filter((Student) => {
    return Student.age >= 18
  })
  .map((student) => {
    return student.name
  })
  .filter((student) => {
    return student.toUpperCase().includes('A')
  })

  //                         ................................... reduce()

