//                     ...................... form event and event Object .........................

// NOTE-1: On input element no use of  click or dblclick event listeners .
//         a) on input element there is 'input' event on it when we write something in input then that time  event is fired
// NOTE-2: when input event if fired addEventListeners('input',function(){}) is call to the function and pass a object into the function
// NOTE-3: we store that object that in some variable to access the value in input so in the object there is target property tell
//         on which input ,input event is fire and on that target object there is a value property which store the input value which is filled
//          by user
//          eg. event.target.value
// NOTE-4: 'change' event is fired on input element when we change the  input and after that click outside the input then that time change
//          event is fired

// NOTE-5: 'focus' event is fired when we focus on the input element
// NOTE-6: 'blur event is fired when we click outside the focused i.e after focus event fired the we click outside the input element
//         blur event is fired
//            ...................
// on input element -> input , change , focus , blur   are four event listeners
//            .....................
// NOTE-1: 'submit' event listener on form element whenever the form is submitted then the submit event listeners is fired
// NOTE-2: whenever the submit event fire then if we want to console the event object so it no print of console bcz when we submit the
//         the form page was reload and the object remove form the memory so , solution of this problem is on the event object there is a
//         method called event.preventDefault() using the we stop the from default behavior
// NOTE-3: there is a global method called FormData from which we take all data of form
// NOTE-4: event.target  value is changeable based on the element form which event is triggered or fired like in form we put a click event of form and we click anywhere 
//        on from on any element inside the form so e.target value is that element on which we click and the click event is fired although event on form but e.target value 
//        is changeable .
//        a) e.currentTarget give always which element on which event is defined or which event fire in case of form click event fired on form element . 
// SO conclusion is that e.target give the element form which element is start the click event or we say triggered 


const input = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

// input.addEventListener('click',()=>{
//     console.log('input clicked');
// })

// input.addEventListener('dblclick',()=>{
//     console.log('input double clicked');
// })

// let inputValue;

// input.addEventListener('input', (e) => {                          // e is event object variable
//   console.log(e.target.value)
//   inputValue = e.target.value
//   paragraph.innerText = e.target.value
// })

// input.addEventListener('change', (e) => {
//   console.log(e.target.value)
//   inputValue = e.target.value
//   paragraph.innerText = e.target.value
// })

// input.addEventListener('focus', (e) => {
//     // console.log(e);
//     console.log(e.type);
//   console.log(e.target.value)
// //   inputValue = e.target.value
//   paragraph.innerText = e.target.value
// })

// input.addEventListener('blur', (e) => {
//     // console.log(e);
//     console.log(e.type);
//   console.log(e.target.value)
// //   inputValue = e.target.value
//   paragraph.innerText = e.target.value
// })

// form.addEventListener('click',(e)=>{
//     console.log(e);
// })

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const myFormData = new FormData(form)
//   // console.log(myFormData);
//   for (const p of myFormData.entries()) {
//     console.log(p)
//   }
// })

form.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e.target);
    console.log("form clicked");
})
