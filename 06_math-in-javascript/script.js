// <-----------------------NOTES----------------->
// 1. we use the Math.random() method of math object it generate any random no. between 0 and 1 .
//    a) with the help of that method we generate any random no. between any no.
//      eg. want to generate any random no. between 1 to 20
//       Math.random() * 20
//       Math.floor(Math.random() *20)  it give whole no.
// 2. Infinity Keyword in Javascript its type is number ,and also Nan(not a number) it's type is number
// 3. Here prompt() return a string so when we perform * operation it give correct output but its by default conversion not relay on that
//   change the type of that string into number and then perform operation

const width = +prompt("Please Enter Rectangle Width"); // it return a string like '7'
const height = +prompt("Please Enter Rectangle height"); // it return a string like '8'  change string to no. using +
console.log(width * height);
document.writeln(`Rectangle Area:${width * height}`); // in print on browser 
