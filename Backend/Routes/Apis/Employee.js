const router  = require('express').Router;
const Employee = require('../../Models/Employee');

//Get the data of the user
router.get("/employee/:id",async (req,res)=>{
    const {id}=req.params.id;
    const data=await Employee.findOne({id});
    if(data)
    {
        res.json({"Success":true,data:data})
    }
    else res.json({"Success":false,message:"Invalid id"})
})

//Update the skill
router.get("/employee/:id",async (req,res)=>{
    const {id}=req.params.id;
    const data=await Employee.findOne({id})
    const {skill_id,skill_name,skill_level,YOE}=req.body;
    if(data)
    {
        const list_skill=data.skills;
        res.json({"Success":true})
    }
    else{
        res.json({"Success":false,message:"Invalid Id"});
    }
})


//