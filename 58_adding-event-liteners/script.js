//                          ___________________________________________________
//                                      Event Listeners

// NOTE-1: (1st way to add Event Listeners) we add a basic click event by set the onClick attribute on any element of HTML and give a  value in a string
//          in this  way we can give any js code in that string  so when click on that element that event this fired.
//        a) This is not efficient the code the junky we right out js code in HTML
//        b) also have limitations in this way to add event listeners we not add event that only one click .
//       onClick = , ondblClick = these are two attribute we use to learn this way

// NOTE-2: (2nd way to add Event Listeners) we add event listeners in js file using DOM manipulation  on each element Node have all these
//         event listeners properties then we set value of the properties using .onClick =
//       a) IN this way  to add eventListeners by set the value of the property of onClick we set only one event if we set another onClick 
//        again it override the first one

// NOTE-3: (3rd way using addEventListeners()) In this way to add event in JS DOM we use the method addEventListeners('event_listeners','event','event'....)
//         In this way to add event listeners on element when we check on properties of element in properties tab onClick properties set to null
//         in this way on properties of element  event is not set it shows in eventListeners tab only
//       a) In this way we add multiple event on one event listeners
//       b) and we directly set a inline function as event
//         eg. element.addEventListener('click',function(){ })

//

const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

function sayhii() {
  console.log('Hiiii')
}

function thirdHii() {
  console.log('Third Hii')
}

// h1.onclick = sayhii

// h1.addEventListener('click', sayhii)
// h1.addEventListener('click', function () {
//   console.log('Second Hii')
// })
// h1.addEventListener('click', thirdHii)

// card.addEventListener('click', function () {
//   console.log('card Click ')
// })

let count = 1
card.addEventListener('click', () => {
  //  const newCard = document.createElement('div')
  //  newCard.classList.add('card')

  // <----------- Another way doing the same using CloneNode ----------------->
  const newCard = card.cloneNode() // NO need to add class using .classList bcz cloneNode also clone attribute
  newCard.classList.remove('add-card') // bcz when we cloneNode all class on Node are also clone
  newCard.innerText = count++
  container.appendChild(newCard)
})
