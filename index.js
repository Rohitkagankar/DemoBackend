require('dotenv').config()
const express= require("express")
const app=express()

const port=3000

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/home',(req,res)=>{
    res.send("inside the home section")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login to enter in the website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>youtube is ready to start.</h2>")
})


app.listen(process.env.PORT,()=>{
    console.log(`listning on port ${port}.`)
})