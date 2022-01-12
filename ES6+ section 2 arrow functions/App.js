console.log("Section 2 : Arrow functions")

/*example 07:
Topic: Short arrow function/Lamda function/Fat arrow function:
What will be the output?
Can you convert below arrow function into function declaration (normal function) format?

// with no parameter
const getNum = () => 2

// ES5 function
function getNum() {
  return 2
}


// with one parameter
// Function
const isOne = (num) => num == 1 // HW: === vs == in JavaScript, write a blog.
// Calling the function
console.log(isOne(12))


function isOne(num) {
   return num === 1 
  }
  console.log(isOne(1))

*/

/*
example 08:
Topic: Arrow function with more than 1 parameter

const isBigger = (a, b) => a > b
console.log('Is 2 bigger than 3?', isBigger(2, 3))

//Normal function
function isBigger(a,b){
return a>b;
}
console.log('Is 2 bigger than 3?', isBigger(2, 3))

// How would you write this with the least amount of characters
function Add22andReturn(num) {
  let sum = 0
  sum = num + 22
  return sum
}

// Version 1
const Add22andReturn = (num) => {
  let sum = 0
  sum = num + 22
  return sum
}

let Add22nadReturn = (num) =>{
      let sum = 0
  sum = num + 22
  return sum
} 


// Version 2
const Add22andReturn = (num) => {
  let sum = 0
  sum = num + 22
  return sum
}

let Add22nadReturn= num =>{
      let sum = 0
  sum = num + 22
  return sum
} 

// Version 3
const Add22andReturn = (num) => {
  return num + 22
}

let Add22nadReturn= num => {return num + 22}


// Version 4
const Add22andReturn = (num) =>
  num +
  (22)
  
  let Add22nadReturn= num =>  num + 22


  // Doing it on an array
  [(1, 2, 3, 4, 5)].map((num) => num + 22)

*/



/*

example 09: 
Topic: Arrow function when there are more than 1 statement

const printSomethingAndReturn = (a) => {
  console.log('squaring a.....')
  return a * a
}
console.log(printSomethingAndReturn(2))

//used backticks.
const printSomethingAndReturn = (a) => {
    console.log(`squaring ${a}.....`)
    return a * a
  }
  console.log(printSomethingAndReturn(2))

*/


/*

example 10:
Topic: Short arrow funtion while returning an object / object literal syntax

const giveMeAnObject = (a) => ({ value: a })  ///Enter code in () so that browser can understand that it is an object.

console.log(giveMeAnObject(5))


*/