//express app
const express = require("express")
const app = express()

app.use(express.static("client"))

app.get("/", function(req,res){
    res.send("<h1> Hello</h1>")
})

app.listen(process.env.PORT || 3001,
    () => console.log("Server is running at http://localhost:3001"));