const Skills=require("../../Models/Skills")
const express=require("express")
const Router=express.Router();



//API for the skills data

Router.get("/getSkills", (req,res)=>{
    Skills.find().then(data=>{
        res.json({"Success":data})
    }).catch(err=>
        res.json({"Error":err}))
})



Router.post("/addSkill",async (req,res)=>{
    const {name,domain}=req.body;
    try{
        const skill=await Skills.create({name,domain})
        res.json({"Success":skill})
    }catch(err)
    {
        res.json({"Errors":err})
    }
   
})

module.exports = Router;
