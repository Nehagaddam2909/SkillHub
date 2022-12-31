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
const router=require("./Routes/Apis/Skills")


// Used to allow the react to access the backend API.
const cores=require("cors")
const { urlencoded } = require("express")

//token authentication
const token=require("./Routes")
const corsOptons = {
	origin: "http://localhost:4000/"
		};
app.use(cores(corsOptons));

app.use("/api",router)
app.use(token)
//Handling the '/' URL
app.use("/",(req,res)=>{
    res.send("<h1>Hello to the world!!!</h1>")
})
mongoose.set("strictQuery", false);
//MongoDb connection
mongoose.connect(process.env.URI).then(result=>{

    //Listen to server
    app.listen(process.env.PORT,()=>{
        console.log("Server Started!!!");
    })
})
