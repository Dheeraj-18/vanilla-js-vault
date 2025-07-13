//

// // function declaration < .............................>    

// function square(num){
//    return num * num
// }

// // function Expression <---------------------------------->

// const square = function(num){
//      return num * num
// }

// // Arrow function Expression <============================>

// const square = (num) =>{    // ....:: we mostly use this one 
//     return num * num           // Here we do explicitly return
// }

const square = (num) => num * num // if we want just one line of return something so skip the brackets and here implicit return
// and here is we have only one parameter then no need to put in parenthesis but more than we must put in parenthesis but we put always for better
// consistency

const add = (num1, num2) => num1 + num2  // .......:: we mostly use this one 

setTimeout(() => {
  console.log('I am arrow function ')
}, 2000)

const random = () => (
    Maths.floor(Maths.random() * 10) + 1  // also a  another way to group ony one line 
)
