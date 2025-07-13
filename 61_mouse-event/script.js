//                              mouse event
//                 ________________________________________

// NOTE-1: mousedown | mouseup | mouseenter | mouseleave | mousemove | mouseout | mouseover
// NOTE-2: mouseenter and mouseover both work same with minute difference :
//         a) mouseover: Triggers every time the mouse enters the element or any of its child elements.
//         b) mouseenter: Triggers only once when the mouse enters the element, not its children.
// NOTE-3: Some which Name doesn't contain mouse but it's a mouse event
//           wheel |
// NOTE-4: scroll event only fire when on which element we put the event scroll that must have a scroll bar then the event fired 
// NOTE-5: some also have mouseevent like but these are on mobile phone so these are touch event 
//         touchstart |
// NOTE-6: drag | desktop only event for that we must set the draggable = 'true'  attribute on element than when we drag that element our drag event is fired 
// NOTE-7: for desktop we mousemove and  touchmove  for mobile but if want want both of then together we have other event i.e pointermove
// NOTE-8: pointermove | work in both desktop and mobile with mousemove and touchmove both functionality
// NOTE-8.1: pointerenter |



const h1 = document.querySelector('h1')
const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// addCardBtn.addEventListener('dblclick', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// addCardBtn.addEventListener('mousedown', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// addCardBtn.addEventListener('mouseup', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// addCardBtn.addEventListener('mouseenter', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('mouseleave', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('mousemove', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('mouseout', (e) => {        // similar to mouseleave we mostly use mouseleave
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('mouseover', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// document.addEventListener('scroll', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('wheel', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('touchstart', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('touchend', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('touchmove', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// h1.addEventListener('drag', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('pointermove', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('pointerenter', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addCardBtn.addEventListener('pointerleave', (e) => {
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })
