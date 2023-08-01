const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

app.listen(5600,()=>{
    console.log("ok")
})


app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./view/home.html"))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./view/login.html"))
})

app.get('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./view/register.html"))
})

