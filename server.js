const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000 //set the port from the env file, or set it to 3000

app.get("/", (req, res) => {
    res.send(`99 bottles of beer on the wall <a href = "/98">Take one down, pass it around</a>`)
})

app.get("/:num", (req, res) => {
    
    if (parseInt(req.params.num) === 0) {
        res.send(`<h1>Click <a href="/">here</a> to start again!</h1>`);
    } else {
        res.send(`${parseInt(req.params.num)} bottles of beer on the wall <a href="${parseInt(req.params.num) - 1}">Take one down, pass it around</a>`);
    }
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})