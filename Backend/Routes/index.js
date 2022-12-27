//Routes of the app

const express=require("express")
const router=express.Router()


router.post("/signup",(req,res)=>{
    const email=req.body.email
    const username=req.body.username
    const password=req.body.password


    //encode the password

    //Check if username is already taken if not then add
    // otherwise generate the error signal
})


router.post("/login",(req,res)=>{
    const email=req.body.email
    const username=req.body.username
    const password =req.body.password

    //Encode the password

    //Check if the usernmae exists 
    //Check the password

})

module.exports=router;