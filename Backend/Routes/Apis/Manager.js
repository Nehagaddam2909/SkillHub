const router=require("express").Router();
const Employee=require("../../Models/Employee")
//API for the employee data
router.get("/getEmployee",(req,res)=>{
    Employee.find().then(data=>{
        res.json({"Success":true,data:data})
    }).catch(err=>
        res.json({"Success":false,message:err}))
})


module.exports=router