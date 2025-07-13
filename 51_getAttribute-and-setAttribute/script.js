//                                 getAttribute(' ')   and       setAttribute('attribute ' , 'att_value ')

// NOTE: both the methods are available on each element of DOM 
// NOTE: with the help of getAttribute() method we get he value of the attribute which give on the html if none of the attribute match it return
//       null , suppose we give in the attribute class in the getAttribute method and if it have a multiple class then it return a all
//       class value in string formate

// NOTE: with the use setAttribute() method we set the attribute on html tag but here with the attribute there value also be set otherwise if
//       we set only attribute using setAttribute() it through error but in html we are allow to put only attribute without there value

// NOTE: We also access javascript specific attribute directly without using getAttribute and change it
//         eg. document.querySelector(h1).id = "container"
//      bcz these attribute are defined as a property on element in the DOM.
//     a) only specific attribute  or we  say in defined in html are show direct as a property on element in the DOM . but if we defined any custom attribute
//        from our side directly on element without using setAttribute it not apply and browser ignore it . 

const paragraph = document.querySelector('p')

// document.querySelector('[procodrr]')

// document.querySelector('[procodrr = "sumit"]')

// console.dir(document.querySelector('[procodrr]').attributes.procodrr)

// console.dir(document.querySelector('[procodrr]').attributes.procodrr.value)

// console.log(paragraph.innerHTML);

// document.querySelector('h2').getAttribute('hello')

// document.querySelector('h1').setAttribute('id', 'heading')
