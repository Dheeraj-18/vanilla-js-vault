//                              Keyboard event (keypress , keyup , keydown)
//                  ___________________________________________________________________

// NOTE-1: we can apply keyboard event in any element but make sure that element must be in focus  on element  then it will work
// NOTE_2: TO make any element focusable set attribute tabIndex = 0 .
// NOTE-3: in the event object all info related event fired have , in case of keyboard event we have two important info i.e key(what value key is pressed)
//          and code (which key is pressed ) access by using e.key and e.code
// NOTE-4: We mostly apply the keyboard event on window object so the whole window or viewport have keyboard event
// NOTE-5: In keypress event shift, alt ,capsLock  not work but it 'keyup' event all these are work well .
// NOTE-4: IN keydown 'keydown' is same as keypress 2 main diff is that in keydown when we long press if work but the last event not count
//        when we keyup, in keypress all event are count till last, second diff is that with keydown , all key like shift , alt work well
//        but with the keypress it doesn't work

const h1 = document.querySelector('h1')
// const input = document.querySelector('input')

// window.addEventListener('keydown', (e) => {
//   console.log('keyCode:', e.code)
//   console.log('keyValue:', e.key)
// })


// h1.addEventListener('keypress',(e)=>{
//     console.log("keyCode:",e.code);
//     console.log("keyValue:",e.key);
// })

// h1.addEventListener('keyup',(e)=>{
//     console.log("keyCode:",e.code);
//     console.log("keyValue:",e.key);
// })

h1.addEventListener('keydown', (e) => {
  console.log('keyCode:', e.code)
  console.log('keyValue:', e.key)
})

// input.addEventListener('keypress',(e)=>{
//     console.log(e);
// })
