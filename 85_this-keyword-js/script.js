//                                             'this'

// NOTE-1  object.fun() in most of the 95% cases on the left hand side of the function call 'this' point to that object
//        1.a If we call another function inside the object method without dot then 'this' point to the window object

// NOTE-2 IN the second parameter of the ForEach we pass any object or this , on which inside forEach 'this' point to that second parameter
//        not window object
//

//                            ___________________________case 1 'this' wih object method ___________________

// const User = {
//   firsName: 'Himmat',
//   lastName: 'singh',
//   fullName() {
//     // return `${this.firsName} ${this.lastName}`
//     function getAge() {
//       console.log('getting age')
//       console.log(this) // Here 'this' points to the window object
//     }
//     getAge()
//     console.log(this) // Here 'this' points to the User object
//   },
// }
//                              _______________________ case 2 'this' inside object methods inside function.
// const User2 = {
//   firsName: 'JK',
//   lastName: 'just JK',
//   tags: ['a', 'b', 'c'],
//   printTags() {
//     console.log(this.tags)
//     this.tags.forEach((tag) => {
//       console.log(tag, this.firsName) // Here 'this' inside forEach point to the window object bcz we not call forEach using user.forEach
//     }, this) // we will fix it so inside forEach also point to the User2 by Passing the parameter in the ForEach
//   },
// }

//                           ________________________________ 3rd case with constructor function_______________________

// console.log(this);                              // Here this point to the global object window

// function Hii() {
//   // Here hii function also go in the window object as we in the earlier course var and function shows in window

//   this.hello = 'world'
//   console.log(this) //  global object so here 'this' also point to window object and we access like window.hii()
// }

// new Hii() // Hii constructor function and inside constructor function Hii 'this' point to that returning object .

//                                    ______________________ case 4 'this' with Event Listeners _________________

// NOTE-1: with the even listener 'this' point the that object on which event listener is set for eg. in this case 'this' point to the h1

// const h1 = document.querySelector('h1')

// h1.addEventListener('click',function(e){
// // console.log(e.target);             e.target point to that element on which event is triggered
//   console.log(this);
// })

//                                   ____________________ case 5 'this' with Arrow Function _______________________-

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions

const User3 = {
  firsName: 'JK',
  lastName: 'just JK',
  tags: ['a', 'b', 'c'],
  printTags: () => {
    console.log(this) // Here in this case 'this' point to the window object by just making arrow function from normal function.
  },
}


//                          Case when Arrow function not use as a methods 

const body = document.querySelector('body')

body.addEventListener('click',(e)=>{
  console.log(e.target);                         // Here e.target point to the element form which event is triggered  
  console.log(e.currentTarget);                  //  e.currentTarget point to the body object so instead of this use event objet in place of 'this'
  console.log(this);                            // Here 'this' again point to the window object 
})



//                        ____________ Case 6 using 'this' inside the class _______________---

//        NOTE-: We know class is the constructor function so it return a object so inside the class 'this' point to that returning object 

 class User4 {
   constructor(){
    this.firsName = 'Himmat'
    console.log(this);
   }

   getUser(){
    console.log(this);             // Here 'this' also point to the User4 object 
   }
 }

 //           ____________ In the class , inside  static Block  and inside the static method 'this' point to the class itself not the 
 //                          returning object ________