//                                       -----------------------------
//                                             BOM in Javascript
//                                  ---------------------------------------------
// There are no official standards for the Browser Object Model (BOM).

// Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to,
//  as methods and properties of the BOM.

// Note-1: In window object no need to access method and properties by using window.____ , we directly access by just names by it.
//            eg. location we also access it by window.location but we directly access it

//  a) window is the global object in the browser, and any property attached to window is also available globally without writing window. explicitly.

// Note-2: Browser provide some feature in the window object
// Note-3: byDefault every window object has a variable i.e'name' that value is empty string that's why we not use name keyword to declare a variable
//       in our js file
// BOM and DOM are part of web API not part of core javascript . 
// DOM is a part of BOM . 
//                       !!!!!!!!!!!!!!!.....................................................................................!!!!!!!!!!

// location.reload()
// location.href="https://developer.mozilla.org/en-US/"
 
//              <----------------------------------------------------->

// history.forward()
// history.back()
// history.go(-2)

//              <------------------------------------------------------>

// innerHeight
// innerWidth

//             <-------------------------------------------------------->

// open()           // open a blank tab and return value a window object , Each tab has it's own window object
// open('url' , name='' , 'resizable')   //  where we give a name bydefault in every window tab name value is empty sting
// close()                 // we can close() tab but we close only those tab which are open by using open() for other we get undefined in return

//             <--------------------------------------------------------->

//resizeTo(200,299)


// resizeTo works with the condition below
// a) tab must be open by using window.open() and in open must set resizable argument


// moveTo(x,y)           // the tab which i open by using open() and resizeTo() if we move on our browser we use this method and give x and y Axis cordinate 
