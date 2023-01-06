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
        const {skill_name,domain}=req.body
        try{
            const skill=await Skills.create({skill_name,domain})
            res.json({"Success":true,data:skill})
            }catch(err)
            {
                res.json({"Success":false,message:err})
                return;
            }
      
   
})

module.exports = Router;
