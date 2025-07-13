//                                                            Promise summary Notes
//                                      ___________________________________________________________
// Note: promise is just a object , promise having three promiseState , pending - fulfilled - rejected
// Note: on promise object we have some method i.e then(callback) , catch(callback)
// NOte: when promiseState if resolve then then() method's callback is invoked and if it reject then catch's callback function
//       is invoked.
// Note: we can either resolve or reject of the promise if state is fulfilled we not reject
// Note: whatever value is passed in the resolve we accept in the then(data) method as data
//        same with catch(error) accept form reject() method
// Note: all these promise state  tracking asynchronously not in js engine main thread
// Note: finally method  run when the promise is settled i.e either it resolve or reject
// Note: all the callbacks of promises are goes into the microTask Queue which has higher priority then callback Queue
// Note: Here then() itself return a promises when we write just .then() method it return promises object
//        each then() method return a promises object so apply on that then() again but we return data explicitly
// ____________________________________________________________________________________________________________________________________________
//                                  REVISED NOTES OF Promises
//                          ----------------------------------------------
//
// 1. Promises is special type of javascript Object .
// 2. new promises(callback)  is a promises constructor function new Promise() creates an object
// 3. When you write new Promise(...), you're calling its constructor to build a Promise object.
// 4. ✅ Final Summary:
//       We say a Promise is a JavaScript object because it’s created using the Promise constructor, which returns an object instance with special behavior
//        and methods to handle asynchronous values.

// 5 ✔️ A Promise has **three states**:
//        1. pending   → Initial state
//        2. fulfilled → Operation completed successfully(resolve fun call)
//        3. rejected  → Operation failed (when reject() fun call)

// 6. promise.then() , promise.catch() return a new promise
//    The value returned inside .then() becomes the resolved value of the new Promise.
//    If you return a Promise inside .then(), it waits for that inner Promise to settle.
//  ******* HERE our code grow vertically so we solve problem of callback Hell ("pyramid of doom )

const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener('click', () => {
    resolve('promise resolved')
  })
  rejectBtn.addEventListener('click', () => {
    reject('Promises Rejected')
  })
})

p.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})
//   .finally(() => {
//     console.log('Finally')
//   })

p.then((data) => {
  console.log(data)
  return 34
})
  .then((data) => {
    console.log(data)
    return 'Dheeraj'
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
