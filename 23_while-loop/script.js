console.log(`program Started  !!`)

// let i = 0;

// while(i < 10 ){
//     console.log(i);
//     i++
// }
let myFriendList = ['raj', 'rohit', 'kamal', 'arayan','prashant']
let i = 0
while (i < myFriendList.length) {
  console.log(`${i+1}. ${myFriendList[i]}`)
  myFriendList[i] = myFriendList[i] + 'procoder'
  i++
}
console.log(`program ended!! now num value is ${i}`)
