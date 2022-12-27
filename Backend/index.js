const express=require("express")
const app=express()
app.use("/",(req,res)=>{
    console.log("Hello")
    res.send("<h1>Hello to the world!!!</h1>")
})
app.listen(4000,()=>{
    console.log("Server started")
})