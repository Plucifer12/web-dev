console.log("Response, Request and Routers in Express")

const express = require('express')
const blog = require('./routes/blog')
const blog = require('./routes/shop')



const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World21!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey its index")
    res.send('Hello World index!')
})

app.get("/index", (req, res) => {
    console.log("Hey its a put request")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Prateek", "Tom"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})