// <------------------------------------SUMMARY NOTES------------------------------------------------> 
// NOTE-1:[[  Behind the seen: ]] 
//              <<<<<<   MEANING OF CHANGING THE VALUE OF A VARIABLE  >>>>>>>
// 
//        when we declare a variable like const name  = "xyz" then in for the value xyz a memory address is generated (like @3435)
//        and save in the string context and  that address is assign to variable name = @3435 and then when we again redeclare it prevent from it(through error) 
//        bcz of const not redeclare . but when we use let name = "xyz" then again address will generated for the value xyx (i.e @5678) and assign
//        to variable name and when we redeclare then name = "abc" it assign the new address for that value abc (i.e @9087) and here javascript
//        engine delete the previous memory address of value 'xyz' i.e @5678 .
// 
// NOTE-2 BUT when we declare a object const user {....}  even that we update it like user.mobile = '7884...' here not give error and not prevent 
//        to edit the key value pair in the const object user even we use const because here is catch i.e when we change or update a key value pair 
//        of const object like that user.mobile="8999..." it doesn't change the object address in this case before and after changing the key-value
//        pair address assign to object is same like (@4535) before edit and same (@4535) after edit but if we change directly user = {....} it
//        through error 
// 
// NOTE-3: delete user.firstName give  true when we delete key-value pair form object when it just object but when we seal the object using 
//         object.seal(user) then delete .firstName give false 
//
// NOTE-4: object.seal(user) using this method we seal out object now we are not able to add or delete a new key-pair value only we update existing 
//         key-pair value
// 
// NOTE-5: object.freeze(user) using this method we freeze our object now we not able to add delete or update our key-value pair any more in the 
//         object 

// NOTE-6: in keyword in js using it we search in the object i.e a key is present or not in the object 
//         in keyword just check only a perticular  key is exist in the object or not 
//        eg. 'firstName' in user => return true 
//        eg. 'firstName'  in user => return false 



let username = 'Dheeraj'

const user = {
  firstName: 'Adarsh',
  lastName: 'Singh',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'Karnataka',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

// Object.seal(user)
   Object.freeze(user)

console.log('isGraduate' in user);
