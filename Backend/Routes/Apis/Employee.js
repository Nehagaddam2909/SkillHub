const router = require("express").Router();
const Employee = require("../../Models/Employee");
const { requireAuth } = require("../../Controllers/index");

//Update the skill
router.post("/employee/addSkill",requireAuth, async (req, res) => {
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
  // console.log(id)
  const data = await Employee.findOne({ _id: id });
  if (data) {
    res.json({ Success: true, data: data });
  } else res.json({ Success: false, message: "Invalid id" });
});





module.exports = router;
