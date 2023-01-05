const router = require("express").Router();
const Employee = require("../../Models/Employee");
const { requireAuth } = require("../../Controllers/index");

//ADDING THE SKILLS
router.post("/employee/skill",requireAuth,async(req,res)=>{
  const id=req.body.id;
  const skills=req.body.skills
  const data=await Employee.findById({_id:id})
  
  if(data)
  {
    const result=[...new Set([...data.Skills,...skills])]
    // console.log(result)
    const ans=await Employee.findByIdAndUpdate(id,{$set:{
      Skills:result
    }})
    console.log(data.Skills)
    res.send({"Success":true,message:"xcvbnm,"})
  }else{
    res.send({"Success":false,message:"Invalid id"})
  }

})

router.post("/employee/:id", requireAuth, async (req, res) => {
  const id = req.body.id;
  // console.log(id)
  const data = await Employee.findOne({ _id: id });
  if (data) {
    res.json({ Success: true, data: data });
  } else res.json({ Success: false, message: "Invalid id" });
});

//Update the skill
router.post("/employee/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Employee.findOne({ _id: id });
  const d = [...req.body.skills];
  if (data) {
    await Employee.updateOne({ _id: data._id }, { $set: { skills: d } });
    res.json({ Success: true });
  } else {
    res.json({ Success: false, message: "Invalid Id" });
  }
});





module.exports = router;
