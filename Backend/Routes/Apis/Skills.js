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

Router.post("/addSkills",async (req,res)=>{
    const skills=[...req.body.skills];
    
    for(let i=0;i<skills.length;i++)
    {
        const skill_name=skills[i].skill_name,domain=skills[i].domain;
        try{
            const skill=await Skills.create({skill_name,domain})
            // res.json({"Success":true,data:skill})
            }catch(err)
            {
                res.json({"Success":false,message:err})
                return;
            }
    }   
   res.json({"Success":true})
})

module.exports = Router;
