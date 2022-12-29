const router=require("express").Router();

//API for the employee data
router.get("/getEmployee",(req,res)=>{
    Employee.find().then(data=>{
        res.json({"Success":data})
    }).catch(err=>
        res.json({"Error":err}))
})


