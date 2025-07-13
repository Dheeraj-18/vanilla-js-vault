//                                     DOM (Document Object Model)
//   _________________________________________________________________________________________________________________________________

// 1. document behind the seen is object when we typeof document is give object so when we just write document in console  it show us in code formate
//    of a document have i.e complete html file
// 2. to see document in object formate  we write console.dir(document)
// 3. Browser HTML parser parse the html code and create a object corresponding  to each html element and all under the document object
// 4. when we done document.children give HTML Collection[html] it's like array but not work like  array i.e we can't apply array method
//    on it but we access there array element like in array

// 5. TO access the element of body we directly same as access in array i.e document .children[0].children[1] this give a body bcs html
//    and has two child now, we directly access document.body.children[]
// 6. In the html tab we able to  see the exact state of our DOM i.e updated DOM
// 7. innerHTML and innerText property difference
// 8. Here we change our image in js file so here when we call this function our image is change dynamically using js

//          ************* Wooooooo  this is called DOM Manipulation ****************************

// 9. when we write like that document.body.children[0] this is object form which we change their property so it is object so we store it
//   in a variable .
// 10. Now select a perticular element to change the style of the element of whatever we done dynamically we write a long access codes
//     document.body.children.[0].children[1] this is is too huge so we have a methods on document even every object have method we will
//     see further in course

function changeImage() {
  document.body.children[3].src =
    'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'

  document.body.children[4].children[2].children[4].src =
    'https://www.shutterstock.com/shutterstock/photos/2198009967/display_1500/stock-photo-autumn-forest-path-orange-color-tree-red-brown-maple-leaves-in-fall-city-park-nature-scene-in-2198009967.jpg'
    
  document.body.children[4].children[3].children[1].src =
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
}
