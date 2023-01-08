const router = require("express").Router();
const Employee = require("../../Models/Employee");
const { requireAuth } = require("../../Controllers/index");

//Update the skill
router.post("/employee/addSkills",requireAuth, async (req, res) => {
  const id = req.body.id;
  const d = [...req.body.skills];
  
    const ans=await Employee.findByIdAndUpdate(id,{$set:{
        Skills:d
      }})
  if(ans)
  {
      res.json({ Success: true });
  } else {
    res.json({ Success: false, message: "Invalid Id" });
  }
});





router.post("/employee/:id", requireAuth, async (req, res) => {
  const id = req.body.id;
  const data = await Employee.findOne({ _id: id }).populate("Skills.skill_id").exec();
  // populate the skills

      
  console.log(data);
  
  if (data) {
    res.json({ Success: true, data: data });
  } else res.json({ Success: false, message: "Invalid id" });
});


router.post("/employees/:id", requireAuth, async (req, res) => {
  const id = req.body.id;
  const data = await Employee.findOne({ _id: id })
  // populate the skills

      
  console.log(data);
  
  if (data) {
    res.json({ Success: true, data: data });
  } else res.json({ Success: false, message: "Invalid id" });
});


module.exports = router;
