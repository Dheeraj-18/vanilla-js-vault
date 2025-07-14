//                   try and catch block (handling Error)
//
// 1. we handle error in our program using try and catch block to handling the error
// 2. Here err(error) is a object, with the console.dir(err) give a object of err
// 3. on that error object having property i.e message(which type of error i.e type , reference ) , stack(tell on which line error occur)
// 4. catch block run only when error occur but finally block run in both cases either it try or error
// 5. We not use in generally in synchronous code use in asynchronous code in async/ await
// 6 with try catch must use otherwise show error
//   _______________________________________________________________________________________________________________-

// const user = {
//   name: 'Dheeraj',
//   age: 22,
// }

// try {
//   console.log(user.address.city)
// } catch (err) {
//   console.dir(err.message)
// } finally {
//   console.log('Hello world')
// }

// console.log(3 + 7)
// console.log('Hello')

async function makeAsyncRequest() {
  try {
    const url = 'https://dummyjson.com/products'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

makeAsyncRequest().then((data) => {
  console.log(data)
})
