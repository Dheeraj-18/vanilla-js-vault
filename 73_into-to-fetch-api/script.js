//                                               fetch() API Notes Summary
//                                     _______________________________________________

// 1. fetch('') return a promise object
// 2. whenever we request using fetch APi so on the first time it not return a data in promiseResult it return a response object and the
//   data are inside the body : ReadableStream so ,on that we do response.json()  then it also return a promise object with promiseResult is our data
// 3. In the response object there is headers i.e when the promise resolve then header appears in the response object
// 3. by default fetch('') send the GET request
// 4. for other method fetch take a second argument i.e { method : "GET"}
// 5. we use any method other than GET POST ... but they must be supported by Backend but we generally use std methods GET POST PUT DELETE..
// 6. with the POST request we also send JSON data
// 7. when we send POST request we require to set some headers content they are optional
// 8. BUT when we send POST we set the body content bascically send data in JSON to the backend
// 9. **TO see and practice use dummyJSON website
// 10. Javascript give a guarantees with the promise object that request of promise resolve only at ones that means promise object 
//     have three state <pending> , <fulfilled> , <rejected> so request is just only ones the state change ony onces at a time and also 
//     that Promise comes with the feature that this is immutable object so we not worry about the data 
//        a) promise object are immutable 
//        b) promise just resolve only at once
// 
//                               <<<<<<<<     ALL Definition of Promises       >>>>>>>>

// 1. Promise object is a placeholder which will be filled with a later value after completion the async operation
// 2 ** Mdn web docs (definition)
//    => Promise is a Object representing the eventual completion or failure of an asynchronous operation and its resulting value. 


//  _____________________________________________________________________________________________________________________________________

// fetch('https://dummyjson.com/products', { method: 'GET' })
//   .then((res) => res.json()) // implicit return in arrow fun
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    category: 'Stationary',
    /* other product data */
  }),
})
  .then((res) => res.json())
  .then(console.log)
  .catch((err) => {
    console.log(err)
  })
