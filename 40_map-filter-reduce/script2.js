// Here in script2.js file we can able to access the script.js file no error but in script tag <> must declare script before script2
//                                   ..........................................
//                                        reduce((accumulator,currentValue,index, array)=>{   })

// Note-1: In the map() and filter() callback function first two arguments are same i.e current value and index but here in reduce() first two
//         argument are different i.e accumulator and current value

// Note-2: In the second argument of reduce() method yes not callback function argument so , the second argument
//        of the reduce method we set initial value of accumulator if not set bydefault value of the accumulator is first element value of array 

// Note-3 when we set the accumulator value then in return accumulator + current value it give  the sum of array with accumulator i.e reduce at last give accumulator value 


const nums = [1, 2, 3]

const sum = nums.reduce((accumulator, current, i) => {
  // console.log(i,current);
  //   console.log(accumulator , current)
//   debugger
  return accumulator + current
    //  return accumulator * current
},0)

console.log(sum);
