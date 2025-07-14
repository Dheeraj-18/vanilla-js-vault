//                             Async / Await Summary Note
//               ____________________________________________________________

// 1. when we write async keyword with any function it return a promise object and if nothing in return take promise result undefined as we know already ,
//    bydefault every function return undefined
// 2. by default async function promise are resolved
// 3. If we want show error in the js program use throw keyword or use  new Error() constructor function .
// 4. SO, If we want to reject our promise of async function use throw for error
// 5. with the facility of returning promise object in async function also have a await keyword which we use
//    only inside the async function .
// 6. If we use await keyword before the fetch then the result of fetch is store in the responsePromise variable
//    simply await keyword wait for the promise resolved and return the promise result
// 7. when the js engine encounter the await the pause the execution of async function(it does not block the main thread )
// 8. when we send sync request using xhr then it block the main thread
// 9. we also use await keyword outside the async function only when we set the type="module" attribute on script tag
//    due to this new module scope are generate and all the variable declare in that module scope , all the variable including declare
//    with let or const goes onto the module scope
//
//

async function makeAsyncRequest() {
  const url = 'https://dummyjson.com/products'
  const response = await fetch(url)
  const data = await response.json()
  // const data = await (await fetch(url)).json()    // another way to use multiple await in one line
  return data
}

// function makeSyncRequest() {
//   const xhr = new XMLHttpRequest()
//   xhr.response = 'json'
//   xhr.addEventListener('load', () => {
//     console.log(xhr)
//   })
//   xhr.open('GET', 'https://dummyjson.com/products', false)
//   xhr.send()
// }

// function addTwoNumber() {
//   return 5 + 8
// }

makeAsyncRequest().then(console.log)

// function hi() {
//   console.log('hello')

//   // throw 'error in program'
//   throw new Error('error in program')

//   console.log('hii')
// }
