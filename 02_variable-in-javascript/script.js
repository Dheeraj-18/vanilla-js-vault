// {
//   var firstname = "Dheeraj";
// }
// {
//   let lastname = "Saraswat";
// }
// console.log(firstname);
// console.log(lastname);
var firstname = 'Dheeraj'
let lastname = 'Saraswat'
let userIntro = "My name is Dheeraj Saraswat"; // camel case to write a varible name
let user_intro = "I am a seft taught web developer"; // snake case to write a variable name
// IN javascript we mostly use Camel case to naming of the variable first work in lower case and after that in upper case
//  eg. person_Customer

let age = 22;
let isHappy = true;

firstname = 100;
let userintro =
  "Hii I am " +
  firstname +
  " " +
  lastname +
  " " +
  "I am " +
  age +
  " " +
  "years old."; // here bydefault string not consider space we explicity do
// by adding empty space string , eg.  + ' '

let a = undefined;
let b = null;

let item;
// when we not give any value of the declare variable javascript engine allocate a memory and assign undefined value
// and make there data type also undefined

const hoursInDay = 24;
// In case of const  must initialize the variable otherwise show error in case of let it initialize by undefined by js engine

// <--------------->
// IN early js var used after 2015 let and const use in practice we mostly use let and const 
// <--- Ques- Diff between let and var ? --------> 
// (i) let and var have similar but the difference when we put into the block i.e let is not accessible outside the 
//   block but var is accessible outside the block same let behavior with const also with block  
//   let and const are block scoped but var is function scoped 
// (ii) we can access var variable before initialization if give a output value undefined  but let access before 
//   initialization through error 
