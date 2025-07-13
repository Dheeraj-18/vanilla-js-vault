//                    .................    Event Delegation  .......................

// -> Event delegation is not a formal term is a way to optimize our code to improve the performance
// -> Objective: We add cards in container using addCardBtn now we want to add feature than if we click on card then it delete .

// first-approach: we apply event listeners on each newCard before append it , so this work fine , but the Problem is that if we have 100 or
//                more card in out page so on each card there is a event listener and it is not good practice form the point of performance
//               on single page .
//
// Second-approach: In this approach we just apply only one Event Listener i.e on parent container not on all cards in side it this way we
//                  optimize our code and improve performance and Yes this process is called Name as Event Delegation
//
//              ______________________________________________________________________________________________________________
//
// 📌 Event Delegation in DOM – Brief Explanation

// Event delegation is a technique in JavaScript where you attach a single event listener to a parent element, and that listener handles
//  events fired by its child elements, using event bubbling.

// ✅ Why use Event Delegation?
//        Efficiency: Attach one event listener instead of many (especially useful for dynamic elements).

//        Dynamic elements: Works even if the child elements are added later via JavaScript.

//        Performance: Reduces memory usage and improves performance for large lists or complex UIs.

// 🧠 How it works (Core Concept):
//        Events bubble up from the target element to its parents.

//        You listen for the event on a common ancestor (often a parent <div> or <ul>).

//        Inside the handler, you use event.target to identify which child element triggered the event.

//  ------------------------------------------------------------
// ✅ Event Object Behavior
// 1. e.target
//       Element from where the event started (triggered).
//       Example: Clicking on a button inside a form → e.target is button.

// 2. e.currentTarget
//       The element on which the event listener is attached.
//       Example: In a form click event → e.currentTarget is form.

// 📌 Conclusion
// e.target → Where event originated.

// e.currentTarget → Where event listener is attached.






const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

// const cardList = document.querySelectorAll('.card')

let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  // newCard.addEventListener('click',(e)=>{                // Here we apply eventListener on each newCard ---> first-approach
  //     newCard.remove()
  // })

  container.append(newCard)
})

// cardList.forEach((card)=>{
//     card.addEventListener('click',()=>{
//         card.remove()
//     })
// })

container.addEventListener('click', (e) => {
  // Second approach by event delegation
  if (e.target !== container) {
    e.target.remove()
  }
})
