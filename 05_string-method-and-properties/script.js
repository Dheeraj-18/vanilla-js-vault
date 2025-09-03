//<-------------------Summary or Key Note------------------>

// 1. string are indexed in the javascript and it also included spaces in indexing
// 2. only one property i.e length and it also count space in the length
// 3. method like touppercase() not modify the original string, only give a string in uppercase only
// 4. trim() method is used to remove the extra space from the string
// 5. we also chaining our methods .trim().touppercase().
// 6. includes('string') method check a perticular string is present in the given string or  not
//    by  match exactly same even case ond space also , return value in true or false
// 7. indexOf('') method return the index of character and we put a string in the argument return the index
//    of the first character on the string and if we give invalid sting or character it return -1 .
// 8. replace() method can change one character or one string onces at a time, and also not modify the original string
// 9. replaceAll() method replace multiple char or string at onces .
// 10 string.concat(a, b ,c) method used for concatenates two or more string by give in separated comma in argument
// 11. padStart() & padEnd () both work same difference is staring and ending argument are , final-length of string
//     and a '*' (character you want to padding in start or end )
// 12. charAt() same work as we access a character by giving index similarly give a index in argument it return a
//     character in that perticular index
// 13. charCodeAt() take argument in index of string and return a ASCII code of that indexed char in no index give
//     by default it take 0 index
// 14. split(' ') method split the entire string and make a array of each split sting like if give argument this ,
//    ' ', then string will split from one space and make a array of splitted strings
// 15. Template literal string ` ` feature are  Introduce in 2015 ES6
//     15.1 one feature learn earlier i.e Multi-line Strings  , add a new line /n
//     15.2 Today we se another feature i.e String Interpolation (Dynamic Insertion of Variables or Expressions)
//          we add directly add javascript code or any js variable by using
//          ${javascript-code-only-or-js-variable}

// __________________________________________________________________________________________________________________________
//                               Sting Methods in Javascript

//     <<<<  "In JavaScript, strings are immutable, so no string method will ever modify the original string." >>>>
//
//        without argument                               |             with argument
// 1.     toUpperCase()                                          I.   includes(substring)
// 2      toLower case()                                        II.   indexOf(substring)
// 3.     trim()                                               III.   replace(old,new)
// 4.     trimStart()                                           IV.    replaceAll(new,old)
// 5.     trimEnd()                                              V.    concat(str)
//                                                              VI.    padStart(length,pad)
//                                                             VII.    padEnd(length,pad)
//                                                             VII.   charAt(index)
//                                                              iX.    charCodeAt(index)
//                                                               x.    split(separator)
//                                                               xi.   at.(index)



const message = 'Hello World'
// console.log('length of the string is ',message.length);
const capitalMessage = message.toUpperCase()
const lowercaseMessage = message.toLowerCase()

const faltuMessage = '       Hi, I am Dheeraj.      '
const finalMessage = faltuMessage.trim()
const finalMessageLowercase = faltuMessage.trim().toLowerCase()
const replacedMessage = finalMessage.replace('Hi', 'Hello')

const lastFourDigit = '7890'
const bankBalance = 987999
const maskedAccountNumber = lastFourDigit.padStart(16, '*')

const concatenatedString = `Last four digit of My back account No. is`.concat(
  ' ',
  lastFourDigit
)
const templateString = ` My back account No. is ${lastFourDigit.padStart(
  16,
  '*'
)}`
const templateString2 = ` I have a ₹${bankBalance} in my account`

const addString = 'I have a ₹' + ' ' + bankBalance + ' ' + 'in my account '
