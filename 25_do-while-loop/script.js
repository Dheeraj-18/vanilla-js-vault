// NOTE: 1) we mostly use for loop because easy and short syntax and here after the for loop block end variable i is also deleted from memory but 
//          in the case of while and do-while we globally declare i 





console.log('Program Start')

// let i = 0
// while (i < 5) {
//   console.log(i)
//   i++
// }

// for(let i = 0; i < 5; i++) { 
//     console.log(i);
// }

let i = 10 
// do-while look execute code atleast one's 
do {
    console.log(i);
    i++
} while (i < 5)

console.log('Program Ended')
