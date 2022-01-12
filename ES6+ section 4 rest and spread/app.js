console.log("Section 4 rest and spread operator");

/*
example 12: Topic: rest

const restExample = (a, ...rest) => {
  console.log(a, rest)
}

console.log(restExample(2, 3, 4, 5, 6, 7, 8, 9, 10))

example 13:
Topic: spread with object

const spreadExample = ({ a, b }) => {
  console.log(a, b)
}

const obj = { a: 1, b: 2 }
console.log(spreadExample(obj))

example 14:
Topic: spread with array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const spreadExample2 = ([first, second, ...rest]) => {
  console.log(first, second, rest)
}

console.log(spreadExample2(array))

// rest with spread
console.log(spreadExample2([...array, 11, 12, 13]))


example 15#
Topic: spread ( can rename parameters )

Will we get an error?

const spreadExample = ({ a: aaloo, b: bhaaloo }) => {
  // destructuring
  // console.log(a,b)
  console.log(aaloo, bhaaloo)
}

const obj = { a: 1, b: 2 }
spreadExample(obj)

What will be the output?

const spreadExample = ({ b: bhaaloo, a: aaloo }) => {
  console.log(aaloo, bhaaloo)
}

const obj = { a: 1, b: 2 }
spreadExample(obj) //1 2

*/

