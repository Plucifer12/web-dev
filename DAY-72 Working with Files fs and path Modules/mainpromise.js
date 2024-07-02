import fs from "fs/promises"

let a = await fs.readFile("prateek.txt")

let b = await fs.appendFile("prateek.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)