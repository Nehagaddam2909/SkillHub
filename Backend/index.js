//Basic Express setup
const express=require("express")
const app=express() 

//url encoded string
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//Mongoose connection
const mongoose=require("mongoose")

//Environment setup
const dotenv=require("dotenv").config()

// Used to allow the react to access the backend API.
const cores=require("cors")
const { urlencoded } = require("express")
const corsOptons = {
	origin: "http://localhost:4000/"
		};
app.use(cores(corsOptons));

//Handling the '/' URL
app.use("/",(req,res)=>{
    res.send("<h1>Hello to the world!!!</h1>")
})

//MongoDb connection
mongoose.connect(process.env.URI).then(result=>{

    //Listen to server
    app.listen(process.env.PORT,()=>{
        console.log("Server Started!!!");
    })
})
