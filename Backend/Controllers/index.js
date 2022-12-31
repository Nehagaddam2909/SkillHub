const Employee=require("../Models/Employee")
const dotenv=require("dotenv").config()
const jwt=require("jsonwebtoken")

//require Authentication
const requireAuth=(req,res,next)=>{
    const token=req.cookies;
    if(token)
    {
        token=token.jwt
        jwt.verify(token,process.env.Secrete_key,(err,decodedToken)=>{
            if(err)
            {
                // console.log(err.message);
                res.redirect("/login");
            }
            else{
                // console.log(decodedToken);
                next();
            }
        })
    }
    else{
        res.redirect("/login")
    }
}

module.exports={requireAuth}
//controller for the post login




//