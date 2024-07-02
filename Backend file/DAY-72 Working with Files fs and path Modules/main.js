console.log("Working with Files: fs and path Modules")

const { error } = require("console")
const fs = require("fs")

console.log("starting")

fs.writeFile("prateek.txt", "prateek is a good boy", () => {
    console.log("done")
    fs.readFile("prateek.txt", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("prateek.txt", " yghuihvggyugff", (e, d) => {
    console.log(d)
})

console.log("ending")