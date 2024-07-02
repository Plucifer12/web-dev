console.log("CommonJs Vs EcmaScript Modules")

// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)

// import prateek from "./mymodule.js"
// console.log(prateek)

const a = require("./mymodule2.js")
console.log(a, __dirname, __filename)