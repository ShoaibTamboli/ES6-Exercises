console.log("Section 5 : Dynamic fields/ Object literal/ Template literal")

/*

example 16:
Topic: Dynamic fields in an object/computed property syntax

let key = 'ram'
const obj = { [key]: 122 }
console.log(obj)

example 17:
Topic: Object literals/Shorthand property value

let aaloo = 1
let bhaaloo = 2

const obj1 = { aaloo: aaloo, bhaaloo: bhaaloo }
console.log(obj1)
const obj2 = { aaloo, bhaaloo }
console.log(obj2) // { aaloo: 1, bhaaloo: 2}

example 18:
Topic: Template Literal

let name = 'Tanay'
let line = 'Helloo ' + name + ' !'
console.log(line)

const helloTemp = `Hello ${name} !`
console.log(helloTemp)

const giveMeFive = () => 5
const line2 = `Hey, my roll is ${giveMeFive()}`
console.log(line2)

// Question: variable 5 // "odd" ->> write this function, using arrow
// Question: use this function in a sentence using template literal

// Shivam's answer
const oddOrEven = (num) => (num % 2 === 0 ? 'even' : 'odd')
const res = `The number 5 is ${oddOrEven(5)} ${name}`

//mine
let evenodd =(num)=> {
    if(num%2==0){
        console.log(`Entered number ${num} is even`)
    }else{
        console.log(`Entered number ${num} is odd`)
    }
}
evenodd(2)

short function: let a = num=> (num%2==0)? 'even' : 'odd';

*/

