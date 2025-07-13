//                                  ==================================
//                                     Function in Javascript : SUMMARY NOTES
//                                   ===========================

//  1. function is a keyword in javascript which used to define  functions
//  2. By-default every function has return value is undefined
//  3. two terminology : argument and parameter argument are pass to the function and parameter we declare in the function definition
//  4. If nothing is passed in the function call it take undefined in the parameter

//  5. we also set the default parameter this was introduce in 2015 ES6 (username = "procoder")         **** ES6
/// 6. before 2015 we done default parameter using if condition for ex:
//     eg. if(username === undefined){ username = 'Procoder'}

//  7. we also give done the same of default parameter in the template literal by apply || operator
//     eg. ${username || `procoder`} if noting give in argument i.e username -> undefined now it take truthy value i.e 'procoder'

//  8. whatever type of argument pass in the function call parameter type will become that type which we pass in the argument 

// 9. Naming of a function best practice is to name a verb i.e something actionable name like adder means whatever we do inside fun give clear 
//   meaning in a function name 

function introduceMe(username = `procoder`, profession = 'Engineer', age) {
  // ------------------- function definition
//   console.log(typeof username);
//   console.log(typeof profession);
//   console.log(typeof age);
  console.log(`Hii`)
  console.log(`My Name is ${username}`)
  console.log(`I am a ${profession}`)
  console.log(`I am ${age}  years old `)
}

// const returnValue = introduceMe()                       // ---------------------function calling

// introduceMe(`Dheeraj Saraswat`, 22)
introduceMe(`Anurag`, `Software Engineer `, 25)
introduceMe(`rohit`, `Mechanical Engineer`, 26)

// introduceMe() // this line give output My Name is undefined
