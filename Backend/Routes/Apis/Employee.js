const router = require("express").Router();
const Employee = require("../../Models/Employee");
const { requireAuth } = require("../../Controllers/index");

//Get the data of the user
router.post("/employee/:id", requireAuth, async (req, res) => {
  const id = req.params.id;

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

//
module.exports = router;
