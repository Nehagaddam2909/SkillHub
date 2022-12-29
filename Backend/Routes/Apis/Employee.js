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
    const data=findOne
})