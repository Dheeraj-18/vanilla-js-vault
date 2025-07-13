//              ---------------------------   Asynchronous vs Synchronous   ----------------------------
//
// Note-1: Javascript is a synchronous single threaded language so for the async code of javascript it give control to browser they control the
//        async code in there thread web api environment
// Note-2: javascript is a single threaded language it block the execution when some sync code run like when alert(') prompt() confirm() run
//         so they block the main thread the js engine onces they execute then move forward
// Note-3: Date.now() is methods in javascript give a time in real time in msec form 1970 to present time .
// Note-4: we also block our main thread of js using while loop
// Note-5: in the open("GET", "API",boolean) we also give third argument basically it's a bydefault async code
//         we make it synchronous code by giving third argument false. so by doing this not this request in js engine main thread
//         bydefault its true run asynchronously
// Note-6: using XMLHttpRequest() with sync code are deprecated feature
// Note-7: with the use of XMLHttpRequest we call both sync or async but we not call sync because it block the main thread of the js engine
// using XMLHttpRequest() we send data asynchronously that is called AJAX (i.e asynchronous javascript and XML)
// AJAX is just a way to send data request in XML data in js async code 
// Note-8: But now use fetch and using JSON for data formate 

// NOTE-10: ONE message for future revision that this give api with sleep time this api not work now is expire don't worry 
//          understand concept only 

const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()
  console.log(xhr)
  // xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    // image.src = JSON.parse(xhr.response).message
    console.log(xhr)
  })

  xhr.open(
    'GET',
    'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=4000'
  )
  xhr.send()
})

// setTimeout(() => {
//   console.log('Hiii')
// }, 4000)

// const blockingBtn = document.querySelector('.blocking-btn')

// blockingBtn.addEventListener('click', () => {
//   const startTime = Date.now()
//   let currentTime = startTime

//   while (startTime + 2000 > currentTime) {
//     currentTime = Date.now()
//   }
// })
