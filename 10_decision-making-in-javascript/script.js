// <---------------Summary Keynotes--------------->

// 1. Every control structure by default scope of one line. i.e first semicolon encounter after if condition
// 2. whatever we take input from prompt is take as a string even you get input a no. in this case i.e useAge
// 3. when we cancel the prompt input then we get null in output and null convert in number get 0 but , when we use
//    parseInt and it cancel return a NaN i.e drawback
//   for eg. parseInt(null) => return = NaN | +null => return = 0
// 4. Mistakes:*********
//    NaN is never equal to NaN
//    In JavaScript, NaN == NaN is always false.
//    You should use isNaN(userAge) to properly check if the parsed age is invalid.
// 


const userName = prompt("Please Enter your Name") || 'Procoder';
const userAge = parseInt(prompt("Please Enter your age ")) || 22;
const newLocal = "please confirm you are ready to fill the from";
const confirmation = confirm(newLocal);
debugger
console.log(`Name:${userName}`);
console.log(`Age:${userAge}`);

// if ((userName === null || userName === "") && isNaN(userAge)) {
//   console.log("Name: procoder");
//   console.log("Age : 22");
// }

if (userAge >= 0 && userAge <= 4) {
  console.log(`${userName} is a kid `);
  console.log("and he/she is playing ");
}

if (userAge >= 5 && userAge <= 17) {
  console.log(`${userName} is School Student`);
  console.log("and he/she is learning math and science ");
}
debugger
if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is College Student`);
  console.log("and he/she is learning computer science");
}

if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} is working professional`);
  console.log("and he/she is a Software Engineer");
}

if (userAge > 45) {
  console.log(`${userName} is retired `);
  console.log("and He/She read Newspaper");
}

console.log("Program Ended!!");
