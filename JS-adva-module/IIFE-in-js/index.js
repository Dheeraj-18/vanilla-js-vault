// Immediately Invoked function Expression

// when we Dom manipulation we create a lot's of variable which pollute the global scope so we wrap in iife
// Majorly library are also written in IIFE way to that they not make lots of variable ...

;(function () {
  const h1 = document.querySelector('h1')
  const p = document.querySelector('p')
  const num = 120

  h1.style.backgroundColor = 'pink'
  h1.style.color = 'black'
  p.innerText = num
})() // first way

// 15 way to create a IIFE
;(function () {
  console.log('IIFE')
}())

(()=>{
    console.log("IIFE");
})()

+function(){
    console.log("IFFE");
}

-function(){
    console.log("IFFE");
}

const a = function(){
    console.log("IFFE");
}()

!function(){
    console.log("IFFE");
}

~function(){
    console.log("IFFE");
}

void function(){
    console.log("IFFE");
}

new function(){
    console.log("IFFE");
}

true && (function(){
    console.log("IFFE");
})()

false || (function(){
    console.log("IFFE");
})()


true ? (function(){
    console.log("IFFE");
})() : ''

