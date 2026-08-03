const name = {
  firstName: 'Dheeraj',
  lastName: 'saraswat',
}

let printFullName = function (hometown , state) {
  console.log(this.firstName + ' ' + this.lastName + " from " + hometown + " , " + state)
}

printFullName.call(name,"noida","uttarpradesh")

let name2 = {
  firstName: 'roy',
  lastName: 'smith',
}

// function borrowing

// bind()  used to invoked a function directly by passing the reference which point to this variable inside the method

printFullName.call(name2,"Delhi","Up")

// apply it exactly same as bind the only difference is the second argument it takes array list which need in a function.

printFullName.apply(name,["agra","uttarpradesh"])

// bind method : It does not directly invoked the method it give the copy of exactly same method which can be invoked later

let printMyName = printFullName.bind(name,"pune","MP") // bind not invoked immediately
console.log(printMyName);

printMyName.call(name2,"lucknow","UP........") // printMyName this is permanently attach to name2 object so this line always print name details not name2

printMyName()


printFullName.call(name2,"Gurugram","Harayana")