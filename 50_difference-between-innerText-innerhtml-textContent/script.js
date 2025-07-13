//                   innerText  vs  innerHTML  vs  textContent

// NOTE: innerHTML returns the exact HTML content (including tags) inside an element.
//       You can also modify the DOM by assigning new HTML code to this property.


// NOTE: innerText returns only the visible text rendered in the browser viewport.
//       It ignores hidden elements and is affected by CSS (like display: none).


// NOTE: textContent returns all the text as it appears in the DOM source,
//       including hidden content. It is not affected by CSS and excludes any HTML tags.


const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);