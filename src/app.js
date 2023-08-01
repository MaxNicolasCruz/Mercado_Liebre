const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

//levantar nuestro servidor
const port = process.env.port || 3001;
app.listen(port,()=>console.log(`servidor corriendo en el puerto ${port}`));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./view/home.html"))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./view/login.html"))
})

app.get('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./view/register.html"))
})

