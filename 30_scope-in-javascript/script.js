//                                         Scope In Javascript 
//                                 ===================================
//             Global Scope : window (object) scope + script 
// Note : whatever variable is declare with the var it  shows in window scope or any function also show in window scope and we can access with the dot
//        operator i.e window.a , window.add() but we can't access script variable with the use of window object it show undefined 

// Note : whatever variable is declare with the use of let and const in showed in script scope 
// Note: when ever a function is called it's local code execution context is generated and a this object is also created in the local context 


// debugger
const userName = `Dheeraj`
let userAge = 22
var a = 50 

function add(){
    const userName = 'Sumit'
    const x = 5
    const y = 8
    console.log(x + y);
    console.log(userName);
}

function subtract (){
   const x = 15
    const y = 8
    console.log(x - y)
    userName
}
for(var i = 0; i<8; i++){
    console.log('Hiii');
}
console.log(i);  // Here we can access outside the block i variable because use var keyword let and const are block scoped 


add()
subtract()

console.log(`Program Ended !!`);