//                               Event Bubbling and Event Capturing
//                        ___________________________________________________

// NOTE-1:  Event Bubbling (Default Behavior)
//          Order: Inner ➝ Outer
//          The event starts from the target element and bubbles up through its ancestors.

// NOTE-2: we have a method on event Object i.e e.stopPropagation() that apply on that element so propagation stop on that element not goes
//         to there ancestor
// NOTE-3: There is a third argument in the addEventListener('event',(e)=>{},{capture:true})  or addEventListener('event',(e)=>{},true)
//        this work opposite to bubbling by default capture set to false 
//   Event Capturing (Rarely Used)
//     Order: Outer ➝ Inner
//     The event travels from the window down to the target element.
// NOTE-4_IMP: If we want that our event is fired only once after that no fired at all use third argument give {once:true}

//  _____________________________
// 📝 Simple Explanation:
//      In capturing, the event is caught on the way down to the target.
//      In bubbling, the event is handled on the way up from the target.
// Note: You can control this using the third parameter in addEventListener.


const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

window.addEventListener(
  'click',
  (e) => {
    console.log('6.window Event Listeners')
  }
  // { capture: true }
)
document.addEventListener(
  'click',
  (e) => {
    console.log('5.document Event Listeners')
  },
  // { capture: true }
)

document.body.addEventListener(
  'click',
  (e) => {
    console.log('4.body Event Listeners')
  },
  // { capture: true }
)

green.addEventListener(
  'click',
  (e) => {
    // e.stopPropagation()
    console.log('3.Green Event Listeners')
  },
  // { capture: true }
)

pink.addEventListener(
  'click',
  (e) => {
    console.log('2.pink Event Listeners')
  },
  // { capture: true }
)

blue.addEventListener(
  'click',
  (e) => {
    // e.stopPropagation()
    console.log('1.blue Event Listeners')
  },
  // { capture: true }
)
// blue.addEventListener(
//   'click',
//   (e) => {
//     // e.stopPropagation()
//     console.log('1.blue Event Listeners')
//   },
//   { once: true }
// )
