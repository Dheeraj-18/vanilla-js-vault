//                                 ==============================
//                                 MOST COMMON Array METHOD : NOTES
//                             ================================
//
// 1. arr.shift() method remove element for starting of the array so it's not effective way because js engine re-indexing the entire array after
//    removing the element it return the deleted element , it modify the existing array

// 2. unshift(element) method add new element in the array form the starting position and return the update length of the array , it modify the
//   existing array

// 3. arr.concat() method used to concatenation two or more array it doesn't modify the original array give a new array which store in another var.

// 4. arr.indexOf(val) return the index of val in the array if not present return -1 or if have a duplicate val then return the first encounter
//    form the start of the array and the val given to the method must be exact match i.e if cat in uppercase in the array and we give indexOf('CAT')
//    return -1

// 5. arr.includes(val) return a boolean value based upon element is exit or not in the array it also care care of case sensitivity of value .

// 6. arr.reverse() this method reverse the original array

// 7. arr.sort() sort the  original array alphabetical first letter in same case order even in the case of number in the case of the number 
//    we will pass a function as per our need like increasing or decreasing order, actually it sorted as per their UTF-16 code  we 
//    will see further in course 
// 
// 8. arr.slice() slice the array it doesn't modify the original array we give index in the method slice it's optional if we not give index it 
//    return same array slice(5) in slice the array form index 5 to .. and return the modify array slice(start,end) it include start index and 
//    exclude end index 

// 9. arr.splice(start,frequency) this method give a array and it modify the original array i.e it delete those element which  give splice() method
//    in include start index and frequency tell no. of element form start to frequency  include in splice() array and that array deleted from 
//    original array 
//    9.a) splice(start-index , count , item1, item2, item3 ) splice() deleted the spliced element form original array and in place of that 
//         just after the start-index we add item1, item2, item3 in the original array 
 
// 10. ********************************** Interview Question slice() 'vs' splice() *******************************

const evenNumber = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
const oddNumber = [1, 3, 5, 7]
const fruit = [
  'apple',
  'banana',
  'papaya',
  'orange',
  'lichi',
  'grapes',
  'pineapple',
]

// evenNumber.shift()                 // delete element from first and return a deleted element
// evenNumber.unshift(12)            // add new element in the start

const addedArray1 = evenNumber.concat(fruit, oddNumber)
const addedArray2 = fruit.concat(evenNumber, oddNumber)

console.log(evenNumber.indexOf(4)) // return the index of element 4 in the array of evenNumber

console.log(oddNumber.includes(55)) // return false 55 not include in the array of oddNumber

const reverseEven = evenNumber.reverse()
const reverseOdd = oddNumber.reverse()

const sortedFruit = fruit.sort() // sort() method sort the array of fruit dictionary order 
const sortedEvenNumber = evenNumber.sort() // it sort the no. even they are already sorted 

const sliceFruit = fruit.slice(3,5)
