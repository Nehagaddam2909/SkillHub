//Basic Express setup
const express=require("express")
const app=express() 

//Mongoose connection
const mongoose=require("mongoose")

// Used to allow the react to access the backend API.
const cores=require("cors")
const corsOptons = {
	origin: "http://localhost:4000/"
		};
app.use(cores(corsOptons));

//Handling the '/' URL
app.use("/",(req,res)=>{
    console.log("Hello")
    res.send("<h1>Hello to the world!!!</h1>")
})

mongoose.connect("").then(result=>{
    app.listen(4000,()=>{
        console.log("Server Started!!!");
    })
})
