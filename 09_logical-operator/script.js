// <------------------------- Summary Notes ----------------------->
// NOTE 1: Here the catch is logical && and Logical Operator does't return true or false actually it return
//         truthy or falsy value
//      eg. 9 && 0 -> return 0 | 8 && 3 -> return 3 | 1 && 0 -> return 0
//      eg. 9 || 0 -> return 9 | 8|| 3 -> return 8 | 1 || 0 -> return 1
// NOTE 2: console.log('Hello') it print on  console Hello [must remember it return value is undefined]


const userAge = 15;
const isSchoolStudent = userAge >= 5 && userAge <= 18;
const isCollegeStudent = userAge >= 18 && userAge <= 24;

const isStudent = isSchoolStudent || isCollegeStudent;

const andResult = 0 && 2;
const orResult = 0 || 2;

// QNA

const andResult2 = "" && "Hello"; // output = ''
const orResult2 = "" || "Hello"; // output = Hello

const andResult3 = "Hello" && null; // output = null
const orResult3 = "Hello" || null; // output = Hello

const andResult4 = "Hello" && 8 + 4; // output = 12
const orResult4 = "Hello" || 8 + 4;  // output = Hello

const logResult = console.log('HellofromlogResult'); // print Hello on console and return value is undefined 

const andResult5 = 'Hello' && console.log('Hello');  // output = undefined 
const orResult5 = undefined || console.log('Hello'); // output = undefined 

