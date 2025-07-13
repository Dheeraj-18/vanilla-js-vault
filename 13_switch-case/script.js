// <--------------------Summary Notes----------------------->

// NOTE-1: Default behavior of switch case is onces a case is true it execute all the case til end of switch block
//         to avoid this use break keyword after case .
// NOTE-2: switch check the condition value and case value match then case code part is executed
// NOTE-3: if two case match the condition then both will executed(when no break use)but in the elseif if one condition is satisfy then
//        program control  end after one elseif satisfy but if we use break in all case then only first encounter
//       case satisfy execute then break control end to the switch
//
// NOTE-4: comparison of switch and case value is strictly equal i.e === 
//
//
//
//

// const dayNumber = 14

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

// switch (dayNumber) {
//   case 0:
//     console.log('It is Sunday Today')
//     break
//   case 1:
//     console.log('It is Monday Today')
//     break
//   case 2:
//     console.log('It is Tuesday Today')
//     break
//   case 3:
//     console.log('It is Wednesday Today')
//     break
//   case 4:
//     console.log('It is Thursday Today')
//     break
//   case 5:
//     console.log('It is Friday Today')
//     break
//   case 6:
//     console.log('It is Saturday Today')
//     break
//     default:
//       console.log('Please enter a valid Number ');
// }

// console.log('Program Ended!!!')

// const userName = 'Dheeraj'
// const userAge = 22

// if (userAge >= 0 && userAge <= 4) {
//   console.log(`${userName} is a kid `)
//   console.log('and he/she is playing ')
// } else if (userAge >= 5 && userAge <= 17) {
//   console.log(`${userName} is School Student`)
//   console.log('and he/she is learning math and science ')
// } else if (userAge >= 18 && userAge <= 24) {
//   console.log(`${userName} is College Student`)
//   console.log('and he/she is learning computer science')
// } else if (userAge >= 25 && userAge <= 45) {
//   console.log(`${userName} is working professional`)
//   console.log('and he/she is a Software Engineer')
// } else if (userAge > 45 && userAge < 121) {
//   console.log(`${userName} is retired `)
//   console.log('and He/She read Newspaper')
// } else if (userAge >= 121) {
//   console.log(`${userName} is immortal`)
// } else {
//   console.log('please Enter a valid age ')
// }

// switch (true) {
//   case userAge >= 0 && userAge <= 4:
//     console.log(`${userName} is a kid `)
//     break
//   case userAge >= 5 && userAge <= 17:
//     console.log(`${userName} is School Student`)
//     break
//   case userAge >= 18 && userAge <= 24:
//     console.log(`${userName} is College Student`)
//     break
//   case userAge >= 25 && userAge <= 45:
//     console.log(`${userName} is working professional`)
//     break
//   case userAge > 45 && userAge < 121:
//     console.log(`${userName} is retired `)
//     break
//   case userAge >= 121:
//     console.log(`${userName} is immortal`)
//     break
//   default:
//     console.log('please enter a valid age ')
// }

const grade = 'C'
debugger
switch (grade) {
  case 'A':
    console.log('your score is between 85% to 100%')
    break
  case 'B':
    console.log('your score is between 75% to 85% ')
    break
  case 'C':
    console.log('your score is between 60% to 75% ')
    break
  case 'D':
    console.log('your score is between 50% to 60%  ')
    break
  case 'E':
    console.log('your score is between 30% to 50% ')
    break
  default:
    console.log('sorry you are failed ')
}

console.log('Program is ended!!!')
