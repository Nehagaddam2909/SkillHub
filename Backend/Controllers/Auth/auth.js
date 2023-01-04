const Employee=require("../../Models/Employee")
const dotenv=require("dotenv").config()
const jwt=require("jsonwebtoken");
const Manager = require("../../Models/Manager");

const age=24*60*60*3;
const createToken=(id)=>{
    return jwt.sign({id},process.env.Secrete_key,{
        expiresIn:age,

    });
}


// Here add the basic backend code
const handleSignup=async (req,res)=>{
    const {FirstName,LastName,Gender,JoinDate,Location,Department,Position,Email,Password,ismanager}=req.body
    // console.log(ismanager)
    try{
        const user=await Employee.create({FirstName,LastName,Gender,JoinDate,Location,Department,Position,Email,Password});
        //encode the password
        if(ismanager)
        {
            const managr=await Manager.create({id:user._id})
            console.log(managr)
        }
        const token=createToken(user._id)
        res.cookie("jwt",token,{httpOnly:false,maxAge:age*1000})
        res.json({"Success":user._id});

    }catch(err)
    {   console.log(err)
        res.json({"Success":false,message:err})
    }

    //Check if username is already taken if not then add
    // otherwise generate the error signal
}


//login form with JWT

const handleLogin=async (req,res)=>{
    const {email,password}=req.body
    
    try{
        const user=await Employee.login(email,password);
        const token=createToken(user._id)
        res.cookie("jwt",token,{httpOnly:false,maxAge:age*1000})
        res.json({"Success":true,"data":user._id});
    }
    catch(err)
    {
        res.json({"Success":false,"message":err.message})
    }
}
module.exports={handleSignup,handleLogin}
