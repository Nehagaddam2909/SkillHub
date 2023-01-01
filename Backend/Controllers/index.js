const Employee=require("../Models/Employee")
const dotenv=require("dotenv").config()
const jwt=require("jsonwebtoken");
const { restart } = require("nodemon");

//require Authentication
const requireAuth=(req,res,next)=>{
    const token=req.cookies;
    console.log(token)
    if(token)
    {
        token=token.jwt
        jwt.verify(token,process.env.Secrete_key,(err,decodedToken)=>{
            if(err)
            {
                // console.log(err.message);
                // res.redirect("http://localhost:5173/auth/sign-in");
                res.redirect("/")
            }
            else{
                // console.log(decodedToken);
                req.body.id=decodedToken._id;
                next();
            }
        })
    }
    else{
        res.redirect("");

        //res.redirect("")
    }
}

module.exports={requireAuth}
//controller for the post login




//