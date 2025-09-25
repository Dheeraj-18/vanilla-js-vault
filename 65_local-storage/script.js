//             <----------------------------------------       Local Storage  ---------------------------------------------->
//                                               ______________________________________

// NOTE: localStorage is a window object in browser we directly access by localStorage.key
// NOTE: In the chrome dev tool application tab show local storage and here we see the data of local storage
//       object data on the url and every URL and have different local storage data.
// NOTE: IN localStorage object there is key and value and here what we give to the value it treated as string
// NOTE: If our localStorage is empty or not exist then if we access then
//             localStorage.myName return a undefined
//             localStorage.getItem('') return a null
// NOTE: use two localStorage oject method getItem() and setItem(" ",)
// NOTE: Json.stringify(obj) convert any object into string  formate i.e JSON string
// NOTE: JSON again convert to object using JSON.parse(JSONsting) method
// NOTE: localStorage.clear() all the localStorage 
// NOTE: localStorage.removeItem('key') remove the key not entire local storage all keys 
//  NOTE: Each website URL has its own localStorage space.(origin) i.e protocol + host + port    _________________________________________________________________________________________________________________________________________________________

const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
const ageElement = document.querySelector('.age-tag')
const ageInput = document.querySelector('.age')

// nameElement.innerText = localStorage.myName       // Not a good practice to do this we have a another and best practice method
// nameElement.innerText = localStorage.getItem('myName')

// nameInput.addEventListener('input', (e) => {
//   //   localStorage.myName = e.target.value
//   localStorage.setItem('myName', e.target.value)
//   //   nameElement.innerText = localStorage.myName
//   nameElement.innerText = localStorage.getItem('myName')
// })

// ageElement.innerText = localStorage.getItem('myAge')

// ageInput.addEventListener('input', (e) => {
//   //   localStorage.myName = e.target.value
//   localStorage.setItem('myAge', e.target.value)
//   //   nameElement.innerText = localStorage.myName
//   ageElement.innerText = localStorage.getItem('myAge')
// })

const myData = JSON.parse(localStorage.getItem('myData')) || {}

if (myData.name) {
  nameElement.innerText = myData.name
}
if (myData.age) {
  ageElement.innerText = myData.age
}

nameInput.addEventListener('input', (e) => {
  myData.name = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
  nameElement.innerText = e.target.value
})
ageInput.addEventListener('input', (e) => {
  myData.age = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
  ageElement.innerText = e.target.value
})
