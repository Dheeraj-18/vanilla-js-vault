// <---------------Summary Keynotes--------------->
// 1. in if or else if condition expression give truthy or falsy value

const userName = 'Dheeraj'
const userAge = 19

// if (!userName) {
//   console.log('Hello')
// }
if (userName) {
  console.log(`Name:${userName}`)
}
if (userAge) {
  console.log(`Age:${userAge}`)
}

debugger
if (userAge >= 0 && userAge <= 4) {
  console.log(`${userName} is a kid `)
  console.log('and he/she is playing ')
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`${userName} is School Student`)
  console.log('and he/she is learning math and science ')
} else if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is College Student`)
  console.log('and he/she is learning computer science')
  if (userAge >= 20) {
    console.log('He is above 19')
  } else {
    console.log('He is below 20')
    if (userName.length > 5) {
      console.log('username has length greater than 5')
    }
    else {
      console.log('user name is very short ');
    }
  }
} else if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} is working professional`)
  console.log('and he/she is a Software Engineer')
} else if (userAge > 45 && userAge < 121) {
  console.log(`${userName} is retired `)
  console.log('and He/She read Newspaper')
} else if (userAge >= 121) {
  console.log(`${userName} is immortal`)
} else {
  console.log('please Enter a valid age ')
}

console.log('Program Ended!!')
