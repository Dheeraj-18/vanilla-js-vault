//                                        ==========================
//                                           Array SUMMARY NOTES
//                                        ==========================
//
//  NOTE-1. array behind the seen work as a object in object key-value pair are not ordered but here in array all value are indexed form 0 to ..
//          whatever we done with object will work with Array or more that object in array

//  NOTE-2. when we do  typeof of a object or array it give object but when we typeof of a function it give function but all three are object type
//          all are non-primitive data type (or we say type of only one object non-prim data type)

//  NOTE-3. Here is same reason we studied in object i.e even we declare array with const keyword const arr but we update the value bcz same reason when
//          we change  or update the value in the array it did't change the address which give to variable arr but when we redeclare  new
//          array like that arr = [] then it give a error
//
//  NOTE-4. Best practice in JS is to store a same type of variable in the array but in js we also store diff type of variable in array , so
//          best practice  to store a diff type of var use object
//
//  NOTE-5. If add new value in the index 10 in the existing length of array 5 so it will add at index 10 and the size become 11 and from index 5
//         to 9 it's value is undefined
//
// NOTE-6. adding element using [arr.length] or using array method arr.push(value, value,....) (it return update length of the array)
//
// NOTE-7. removing the element using pop() method it remove the last element and return the element which was deleted 
// 
// NOTE-8. we also add key-value pair in the array but it length not increase it 0 ,but we access it like in object i.e arr.firstName = "Dheeraj"
//        but generally  we not do that



const userName = `Dheeraj Saraswat`

const fruitCollection = [
  `apple`,
  `banana`,
  `grapes`,
  `Dates`,
  { name: 'Dheeraj', as: { age: 22 } },
]

const vibgyor = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
vibgyor[vibgyor.length] = 'yellow' // here .length give last index every time so we add in the last of the array
vibgyor.push('black') // another way to add a new item in the last of the array using push() method it return is console update length we also
// add multiple item separated by comma
