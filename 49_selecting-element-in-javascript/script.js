//                                     DOM-- Selecting Element in jS
//   _________________________________________________________________________________________________________________________________

// Note-1: with the getElementsByTagName('') we access tag and even for one tag or more it return a HTML collection of objects we access like array
//         using dot operator

// Note-2: IN case of plural methods like getElementsByTagName() and getElementsByClassName() when nothing is match with the class no element
//         is exist it return Empty array i.e HTMl collection array like object .

// Note-3: But in case of getElementById() it's singular so it return null when no Id match , getElementById() method return a one element which
//          which id match with the first encountered element  in the HTML that why we give a unique id and every element has only one Id

// Note-4: querySelector('') take argument in css selector formate we pass anything like tagname, class , id but in css selector formate
//        eg. for class using .class_name , for id using #id_name
//       a) it return a only one object which  first match encounter in the html page with id or class ... 
//       b) with the use querySelector('') we select any selector in css any.
//       c) when nothing is match it return null

// Note-5: querySelectorAll('')  select all match with the attribute either is id or class or any selector basically it select all match
//         and return a NodeList in case of TagName ById ByClass they return a HTML collection .
//        a) we run some method on this NodeList like forEach() that why it's better than HTML collection
//        b) this method select all match selector it don't care about even it if two or more element having same id it select all and add in their
//           NodeList
//        c) when nothing is match it return Empty NodeList

//        <----------------------------------------------------------------------------------------------------------> 

// IMP_NOTE: we give same id to the multiple elements even css also not objection it , it works also here we see same with querySelectorAll( ) it
//          select all match selector don't care about two element have same id
//         But this in not a good practice for our SEO and accessibility point of view that's why we give a unique id for each element

// NOTE: we Mostly use querySelector('') or querySelectorAll('')  to making project , getElement... we not use today in practice

// NOTE: HERE all selecting method of document object , In every element object have also define these methods we we also directly use then like
//        ul.querySelector('')...   but getElementById('') only define on document object we not use this method by element
//      a) with document object we select elements by form entire html doc but by if we want to select element within the element we use directly 
//         selecting method which also define on every element in DOM .

// NOTE: we directly select by using element without document object
//       a) getElementById() method only define in document so we can't access by element
//       b) for other like that we select by element
//           for eg. const ul = document.querySelector('ul')
//                  const imageInsideUl = ul.querySelector('.css-image')   ----> select by element

// NOTE: with HTML Collection None of the array method with work but with NodeList forEach() array method work to fully convert into array we use
//      spread operator

// Note: we directly select any specific element for dev tool copy js path it give a specific path using query selector

//               <-------------------------------------------------------------------------------------------------------------------> 

// What is the DOM?
// DOM (Document Object Model) is a programmatic representation of your HTML document.

// When the browser loads an HTML page, it parses the HTML and creates a DOM tree (a structured representation in memory).

// Each HTML element becomes a node (e.g., <div>, <p>, <h1> become div, p, h1 nodes).

// This DOM tree allows JavaScript to access and manipulate HTML elements dynamically.

// 🔷 Relationship between JavaScript and the DOM
// JavaScript uses the DOM API to interact with your webpage's structure and content.

// Think of it like this:

// ✅ HTML = structure
// ✅ CSS = style
// ✅ JavaScript = brain that controls behavior using the DOM

//     <__________________________________________________________________________________________________________>

// const allImages = [...document.images]
// const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image')[0]
// const cssImage = document.getElementById('css-image')

// const cssImage = document.querySelectorAll('#css-image')         // -------------- id-selector
// const cssImage = document.querySelector('#css-image')                           // ----------> class-selector
// const jsImage = document.querySelector('[ alt="javascript roadmap"]')                 // ------> attribute-selector

// const li = document.querySelector('ul li')                                     // -----------> descendant selector
const ul = document.querySelector('ul')
const imageInsideUl = ul.querySelector('.css-image') // -----> select within element

const allImages = document.querySelectorAll('img')

const imagesUrl = [
  'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80',
  'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80',
]

// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]

// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = imagesUrl[i]
// }

allImages.forEach((image, index) => {
  image.src = imagesUrl[index]
})

// when we use document.images it return a all image in the HTML collection and it's  array like object but
// forEach function not work upon it so we convert into array using spread operator
//   const allImages = [...document.images]
// --> Now it become a array it's also better than NodeList now we apply all method on it
