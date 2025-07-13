//                       **********************************
//                         Event Loop and Callback Queue 
//                             ******************************

// --> Synchronous : The code which push directly in the call stack called names as synchronous code and yes Js code are synchronous 
// --> Asynchronous: The code which not directly push onto the call stack rather it goes to webApI section then go to callback queue that 
//                   after that event loop check is call stack empty if yes then they push onto the call stack that code called named as asynchronous code. 



//  2. What is the Event Loop?
// The event loop constantly checks:

// -> Is the call stack empty?

// -> If yes, is there anything in the callback queue?

// -> If yes, push it to the call stack and execute it.

// -> It acts as a bridge between the callback queue and the call stack.           


// What is the Callback Queue?
// The callback queue holds callback functions from asynchronous operations, such as:

// setTimeout

// DOM events

// AJAX/fetch responses

// When the async task completes, the callback is pushed to the callback queue (waiting to be executed).

// But it won’t run immediately — only when the call stack is empty and the event loop picks it.







console.log('Hi-1')

function hello() {
  console.log('Hello-world')
}

for (let i = 1; i <= 4; i++) {
  console.log(i)
}

hello()
setTimeout(hello, 0)

console.log('Hi-2')
