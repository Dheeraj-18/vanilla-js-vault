//                                                SUMMARY NOTES
//                                        ______________________________________

//         JSON ( javascript Object Notation)
// Note-1: JSON is a javascript like  object bcz in javascript it treated is simply a object
// NOTE-2:  the syntax of the JSON object that  key are enclosed by double quote and if value is string it also enclosed by double
//         quote.(if we write in JSON File formate)
// NOTE-3: IN JSON file object Trailing comma not allowed but in js file object no error

// Why Use JSON?
// The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

// Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

// JavaScript has a built in function for converting JSON strings into JavaScript objects:

// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:

// JSON.stringify()
// _________________________________________________________________

// ✅ Formal Definition:
// fetch() is a built-in JavaScript function used to make HTTP requests to servers, commonly to interact with web APIs. 
// It supports all standard HTTP methods like GET, POST, PUT, DELETE, etc., and defaults to the GET method if none is specified. 
// By default, it returns a Promise that resolves to a Response object, which contains status, headers, and body data. 
// The response body is not automatically parsed; it must be read using methods like .json(), .text(), or .blob() 
// to access the actual response data (commonly JSON when working with APIs).


// FETCH:
// This is not an HTTP method — it is a JavaScript function used to make HTTP requests (including GET, POST, DELETE, etc.)

// 🔹 FETCH — "I want to talk to the server using JavaScript"
//             Type: JavaScript Web API function
//             Used For: Making HTTP requests from browser or frontend code

// ______________________________________________________________________________________________________________________________________________

// let userData    // ---> fetch return a JSON object we store in a variable to use

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log('Got the Data');
//     console.log(json)
//     userData = json
//   })

const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => {
      image.src = json.message
      console.log(json);
    })
})
