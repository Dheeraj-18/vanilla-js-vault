//                                        Summary Notes
// NOTE_IMP: earlier when json not introduce XMLHttpRequest use to transfer data or data in XML formate but now we have JSON and we use fetch

// Note: Bydefault every function return undefined when we not return any thing but if we use new keyword with function invoked statement(call)
//       the it return a object with a function name
// Note: XMLHttpRequest() is also a function , we must call this function with new keyword otherwise through error , i.e new XMLHttpRequest()
//       then it return a object
// NOTE: on that object various methods are define on it with the help of these we send request and transfer data
// NOTE: open('GET',"API") send()

const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
   const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  // xhr.addEventListener('load', () => {
  //   image.src = xhr.response.message
  //   console.log(xhr)
  // })

  xhr.onload = ()=>{
    image.src = xhr.response.message
    console.log(xhr)
  }

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})
