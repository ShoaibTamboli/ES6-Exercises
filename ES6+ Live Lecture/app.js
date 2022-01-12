/*section 1: let, const, and var

example 01   

Topic: Block scope & functional scope

What will be the output and why?



if (true) {
    let a = 2
    // var a = 2;
  }
  console.log(a)

// Will throw reference error a is not defined. since we are consoling a which is in global environment and a is not declared.


let a = 42
{
  let a = 100
}
console.log(a)

// will give output as 42, because here 'a' in console.log will refer the global 'a' value.

let a = 100
function App() {
  console.log('1', a)
  let a = 42
  console.log('2', a)
  {
    let a = 100
  }
  console.log('3', a)
}

// will give ReferenceError: because we Cannot access 'a' before initialization. since we have used 'let'.

let a = 100
function App() {
  a = 42
  console.log('1', a)
}

//will give output as '1' 42 because we are consoling a which is in a local scope. not the Global.

*/


/*
example 02:
Topic: TDZ. Temporal Dead Zone What will be the output of this? And why?


function something() {
  console.log(a)
  let a = 2
}

something()

// It will give  ReferenceError: Cannot access 'a' before initialization. TDZ since we have used 'let'. If we had used var then it will give a 'undefined' value.

*/

/*
example 03:
Topic: Hoisting.
Output and why?

function something() {
  // a = undefined
  console.log(a)
  var a = 2
}

something()

//Since we have used 'var' it will give output as undefined.

*/

/*
example 04:
Topic: const VS var

const tanay = 2
tanay = 3

// It will throw an Typeerror: Assignment to constant variable. because we cannot reassign the value to a constant variable.
we cannot change the value of a const.
*/

/*

example 05:
Topic: const with objects
const obj = { a: 1, b: 2 }
obj.a = 22

// No error , Inside {} we can change the value of an object.

const obj = { a: 1, b: 2 }
obj.a = 22    ///We can add or modify the value by using 'obj.xyz'

console.log(obj)  // will return updated value.

obj={c:20};  //this will give an  TypeError: Assignment to constant variable. we cannot assign the value to a constant.
console.log(obj)


const obj = { a: 1, b: 2 }
const obj2 = { a: 3, b: 4 }
obj = obj2

//It will throw an TypeError: Assignment to constant variable. We cannot re-assign the value to a const.

*/

/*
example 06:
Topic: const with arrays
Will we get an error? What will it return?

const array = [1, 2, 3, 4]
array.push(55)
console.log(array)

//We can push the element inside an array.


const array = [1, 2, 3, 4]
array = array.push(55)
console.log(array)
// It will give type error. TypeError: Assignment to constant variable.


*/
