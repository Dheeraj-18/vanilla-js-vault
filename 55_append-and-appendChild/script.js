//                         append()  and appendChild()  Methods

// NOTE: Both Methods are defined on each element in DOM used to add element inside element

// REMEMBER NOTE: we append any element inside the any element except that not append the parent element to  inside the child element

// ✅ NOTE: In the DOM, we can append a child element inside a parent element, but we cannot append a parent element inside its own child.
// (i.e., parent.appendChild(child) is valid, but child.appendChild(parent) is not allowed and will throw an error or cause unexpected behavior.)

// NOTE: we must define the defer attribute on script tag  so the  browser send request prior to the network for js file then parallely HTML and CSS parse on
//      browser and after that js code manipulate otherwise when defer not set in our const container value is null .
//     a) we also allow to give script tag at last of the body tag.

//NOTE-1: with appendChild() method we just cut a element and paste it to inside other element or we say append at last of  that other element
//        and there return value is the element which is append

//NOTE-2: But if we want make a copy and then append i.e original not effected use element.cloneNode()  method and it returned cloned element
//       a) if we just do cloneNode() then it return only empty element with all attribute but text and child element not cloned
//       b) but cloneNode(true) return complete html element with all text i.e text and all children are copied

// NOTE-3:   Difference between append()  and appendChild()  --> 3 difference
//
//        a) appendChild() return a element Node which  append, and it always take argument only Node type i.e element in DOM
//        b) append() return undefined and it take anything to append eg. string
//        c) both work similar cut and paste not create a clone of Node .
//        d) we append string by appendChild() using convert that string into text node using createTextNode("") method
//            eg. newTextNode = document.createTextNode("hello world")
//               element.appendChild(newTextNode)
//        e) with the use of append(,,) we append multiple things separated by comma
//        f) but with appendChild() only one argument with take i.e append only one node if give by separated comma it ignore and take only first argument
//             < ------------------------------------------------------------>
// 
//     Element.append() allows you to also append strings, whereas Node.appendChild() only accepts Node objects.
//     Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
//     Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.
//






const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const card = document.querySelector('.card')

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// container.appendChild(card.cloneNode(true));
// container.appendChild(card.cloneNode(true));
// container.appendChild(card.cloneNode(true));

for (let i = 2; i < 100; i++) {
  let newCard = card.cloneNode()
  newCard.innerText = i
  container.appendChild(newCard)
}
