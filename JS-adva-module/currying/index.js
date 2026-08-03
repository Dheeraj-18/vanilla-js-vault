// currying function using bind() method

let multiply = function (x, y) {
  console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)

multiplyByTwo(7) // 14

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(8) // 24




// currying of function by using the concept of closure

let multiplyC = function (x) {
  return function (y) {
    console.log(x * y)
  }
}

let multiplyByTwoC = multiplyC(2)
multiplyByTwoC(4) // 8 

let multiplyByThreeC = multiplyC(3)

multiplyByThreeC(6) // 18
