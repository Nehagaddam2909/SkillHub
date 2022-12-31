//Routes of the app
const cookieParser=require("cookie-parser")
const Employee=require("../Models/Employee")
const manager=require("./Apis/Manager")
const emp=require("./Apis/Employee")
const skill=require("./Apis/Skills")
const {handleSignup}=require("../Controllers/Auth/auth")
const express=require("express")
const { application } = require("express")
const router=express.Router()


router.post("/signup",handleSignup)


router.post("/login",(req,res)=>{

    //Encode the password

    //Check if the usernmae exists 
    //Check the password

})


router.use(manager)
router.use(emp)
router.use(skill)
module.exports=router;