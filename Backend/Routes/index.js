//Routes of the app
const cookieParser=require("cookie-parser")
const Employee=require("../Models/Employee")
const manager=require("./Apis/Manager")
const emp=require("./Apis/Employee")
const skill=require("./Apis/Skills")
const {handleSignup,handleLogin}=require("../Controllers/Auth/auth")
const express=require("express")
const { application } = require("express")
const router=express.Router()


router.post("/signup",handleSignup)


router.post("/login",handleLogin)


router.use(manager)
router.use(emp)
router.use(skill)
module.exports=router;