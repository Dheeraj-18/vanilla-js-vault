// <---------------------------------------SUMMARY NOTES--------------------------------------------> 
// 1. boolean false variable at address @75 | true variable at @73 address
// 2. all null variable address at @71
// 3. all undefined variable at address at @67
// 4. all empty string variable at address @77
// LONG story short value have a address which store separately then that address assign to the variable 
//  eg. value => Dheeraj  address @3456
//      firstName => @3456

const firstName = 'Akash' // in output shows string Akash 
const firstName3 = 'Akash' // in output shows string Akash but shows same address as firstName
const firstName2 = 'Aka' + 'sh' // in output shows  string Akash but at different address from firstName
const lastName = 'sharma'
const userAge = 15
const birthYear = 2000
const isGraduate = false
const hasjob = true
const myNull = null 
const myUndefined = undefined  
const myEmptyString = ''
