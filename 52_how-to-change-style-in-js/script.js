//    <--------------------------------------  apply or change style or element with JS -------------------------->

// NOTE-1: we can change or style the css properties that are inline css i.e define on the attribute of html we access the external css but usually
//         we not do with anything with that . so all properties of css on a element access by using .style on any element  of object of DOM

// NOTE-2: whatever we put the style using js they apply on DOM ,in page source these styles are not visible ****

// NOTE-3: in the JS style properties name are in a camel case like backgroundColor (in css file, background-color)

// NOTE-4: TO avoid the redundance of apply .style for each property we use .cssText = ` ` in this string we write our all css style with same
//         syntax as we written in the css file .
//        a) remember we write all style properties in the string and in the double or single quote new line is not allow so use backtick ``

// NOTE-5: another way to avoid .cssText also by applying class on element or using setAttribute('','')

// NOTE-6: we use majorly use classList (DOMTokenList) in all our project it most efficient way to apply css using js 
// NOTE-7: In DOMTokenList we have a methods like add() remove () toggle() with the help to these we apply or remove class on html in JS 
//          eg. classList.add() 
//              classList.remove()  
//              classList.toggle()

// NOTE-8: in the className property all class on single string so we write all if we apply and here we apply only one then it override others
//         but in classList we have a all class in array we add and remove classes easily no override problem here 


//                 NOTES image on stylenotes.png

//    -------------------------------------------------------------------------------------------------------------------------------



const h1 = document.querySelector('h1')

h1.style.color = 'hotpink'
h1.style.backgroundColor = 'yellow'

const anchorTags = document.querySelectorAll('a')

// for(let i= 0; i<anchorTags.length; i++){
//     anchorTags[i].style.color = 'teal'
// }

for (const tag of anchorTags) {
  //   tag.style.color = 'teal'
  //   tag.style.textDecorationLine = 'none'
  //   tag.style.fontWeight = 600
  //   tag.style.fontFamily = 'cursive'
  //   tag.style.fontSize = '2rem'
  //       -----------------------------------------------
  //   tag.style.cssText = `
  //   color:teal;
  //   font-size : 1rem;
  //   font-family:cursive;
  //   font-weight:600;
  //   text-decoration-line:none;`
  //         ------------------------------------------
  //   tag.className = 'green-link'
  //   tag.className = 'wavy-link'
  //  tag.className ='my-link green-link'   // that intact the both inline and js style
  //            ---------------------------------------
  //   tag.setAttribute('class', 'green-link')
  //          ---------------------------------------

  tag.classList.add('green-link')          // here our inline css are also intact and we add new style by js DOM manipulation
  tag.classList.remove('my-link')          // remove() method of classList remove the class from element 
}
