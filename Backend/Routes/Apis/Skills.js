const Skills=require("../../Models/Skills")
const express=require("express")
const Router=express.Router();



//API for the skills data

Router.get("/getSkills", (req,res)=>{
    Skills.find().then(data=>{
        res.json({"Success":true,data:data})
    }).catch(err=>
        res.json({"Success":false,message:message}))
})


//Form to add the skills

Router.post("/addSkill",async (req,res)=>{
        const {skill,domain}=req.body
        console.log(skill,domain)
        try{
            const data= await Skills.create({skill_name:skill,domain})
            res.json({"Success":true,data})  
            }catch(err)
            {
                console.log(err)
                res.json({"Success":false,message:err})

            }
      
   
})

module.exports = Router;
