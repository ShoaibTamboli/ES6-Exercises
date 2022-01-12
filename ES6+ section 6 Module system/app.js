console.log("Section 6: Module System");

/*
example 20:
Topic: default export

//  →  /utils.js

const square = (a) => a * a
export default square

//  →  /app.js
import square from './utils'

console.log(square(2))

example 21:
Topic: import/export with rename
//  →  /utils.js

const add = (x, y) => x + y

export { add as sum }

//  →  /app.js

import { sum as xyz } from './utils'

console.log(xyz(2, 5))

*/