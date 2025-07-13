//                              Event simulation
//                    ______________________________________

// NOTE-1: There is No formal term Event Simulation , basically for event triggered we use mouse or keyboard then the event  fired ,
//         so we will do it and  simulate event triggered  using js code i.e On every element in DOM there is a click method by using this we simulate the events
// NOTE-2: ON every element there is a method click() with the help of these methods we simulate event triggered without using mouse or keyboard 
//         just wite a js code 
// NOTE-3 we simulate focus event on input element by using focus() method on input  element 
//        we simulate blue event on input element by using  click() method on  input element
// NOTE-4: we simulate for submit event on form by using the submit() method on it . 
// NOTE-5: we also simulate the  form reset functionality by using js simulation  method on form element using form.reset() make sure the button 
//         must set the attribute type is reset

// WE mostly use frequently focus()  blur()  click()

const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

// const intervalId = setInterval(() => {                       // simulate click event using element.click()
//   if (count > 99) {
//     clearInterval(intervalId)
//   }
//   addCardBtn.click()
// }, 50)

// setTimeout(() => {                                               // simulate focus event using input.focus()
//    input.focus()
//    console.log('Input Focused');
// }, 1000);
                                                                         
// setTimeout(() => {                                                // simulate blur event using input.blur()
//    input.blur()   
//    console.log('Input Blur');
// }, 3000);


// setTimeout(() => {                                                  // simulate submit event using form.submit()
//     form.submit()
//     console.log('Your Form is successfully Submitted');
// }, 3000);

// form.reset()                                                       // simulate reset fo the form 