//                   Summary Notes

// NOTE: before using the ES6 import and export facility must set the attribute on script take type = "module"
// 1. In the early in js there no facility to split our code or export and import SO , at that time we use "Common JS" for import our code
//     using "require" syntax use in Node js as well
// 2. In ES6 there is facility to introduce i.e import and export fo js file in our main file or we split our code and use by export and
//    import
// 3. In import syntax { , } the variable name is case sensitive i.e whatever we use in export syntax file same use in import (case sensitive )
//    but we change name by using 'as' in export syntax
//     eg. export { myName as MyNames} (i.e convention is named export )
// 4. same way of changing the name using 'as' keyword in import also we do it
// 5. we mostly renaming at the   time of import usually
//            _____________________________________

// 6. another convention of export file using default i.e default export previous one we learn i.e Named export
// 7. with that default export syntax also change in import syntax corresponding to the default export and i.e in import not use curlyBraces{}
// 8. while we use default syntax there is facility come with that i.e in import we reaming whatever we want without using 'as' keyword
// 9. Best practice we use  the same naming in import and export  for some special like import class mean depend upon type of data we export
//    so we use capital naming convention we se later further in course
//10. we both use at the same time default or named export as well there is no rule use only one at a time
//11. in import we write for both default and names export using , i.e
//    eg. import userData , {myName} from './userData.js'
// Inside the curlyBraces import named export and outside using comma import default export

//           _______________________________________

//12. for name export we directly export inline with the variable declaration  i.e
//       eg. export const userData = []
//13. But we don't use export default inline with any variable declaration (throw error)
//14. we directly inline default export of a function declaration
//      Yes, in JavaScript, you cannot use export default more than once in a single file. This is because:
//      ✅ export default defines the default export for a module.
//      A module (file) can only have one default export.

//         __________________________________________

//15. we also use import * as  anyVariableName form './userData.js'
//      this give a module object on that all data .
//   using this syntax * we can export entire but for the default we access this by using anyVariableName.default()
// when we set type = "module" so we can import and export variable but not accessible globally form console .
// in is in module scope
// 16_IMP. when we set type = 'module' then defer is automatic set no need to set defer explicitly

//          --------------------
//
// Note-1 when we declare any variable without using let var const it directly go into global window object and
//        access globally even if we declare inside the function without using let var cost then is also attach to the global
//       window object , but even we use var inside the function so it does not attach to the global window object
//   THIS WILL Pollute the global scope
// NOTE-2 TO avoid these issue, set on the top of the file 'use strict' these enable the strict mode

//         .......................................................................................
// NOte_IMP : MOST IMPORTANT CONCEPT(NOT ONE TELL THIS )
//   js Engine scan the the js file and even the console.log statement write So, if they encounter the import .userData.js then they
//   first import and create there variable then run there code then after js file code execute

// REVISED NOTE OF ABOVE NOTE :-
// NOTE_IMP: MOST IMPORTANT CONCEPT
//
// When a JS file is executed (in ES Modules), the engine first parses the file
// and finds all import statements at the top.
//
// It **does NOT run the code immediately**, even if there's a console.log before import.
//
// Instead, it first:
//   1. Fully loads and executes all imported modules (e.g., userData.js).
//   2. Then, after the imported module finishes executing, the main file runs.
//
// This is why, even if `console.log()` appears before `import`, the imported file runs first.
//           ............................................................................................
//  ____________________________________________________________________________________________________________________________

// import { usersData, myName as myNames } from './usersData.js'

// import { myName } from './usersData.js'
// import usersData from './usersData.js'
// import getFirstUser, { myName } from './usersData.js'
// import * as something from './usersData.js'

// import productsData from './productsData.js'

// const myName = 'Shrikant'

// console.log(something)

// console.log(getFirstUser)
// console.log(myName)

// console.log(productsData)

// const h1 = document.querySelector('h1')
// console.log(h1)

console.log('Hiii')

import { usersData } from './usersData.js'
