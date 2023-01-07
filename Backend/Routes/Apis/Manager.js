const router = require("express").Router();
const Employee = require("../../Models/Employee");
const { requireAuth } = require("../../Controllers/index");
//API for the employee data
router.get("/getEmployee", (req, res) => {
  Employee.find()
    .then((data) => {
      res.json({ Success: true, data: data });
    })
    .catch((err) => res.json({ Success: false, message: err }));
});

router.get("/applyFilter", async (req, res) => {
  // Extract the filter values from the request query parameters
  const { filter_gender, filter_location, filter_department, filter_position } =
    req.query;
  console.log(
    "backed geted data:",
    filter_gender,
    filter_location,
    filter_department,
    filter_position
  );

  const filter = {};
  if (filter_gender && filter_gender !== "All") filter.Gender = filter_gender;
  if (filter_location && filter_location !== "All")
    filter.Location = filter_location;
  if (filter_department && filter_department !== "All")
    filter.Department = filter_department;
  if (filter_position && filter_position !== "All")
    filter.Position = filter_position;

  //   if (Object.keys(filter).length > 0)
  {
    const employees = await Employee.find(filter);
    res.send(employees);
  }
  //   else {
  //     const employees = await Employee.find({});
  //     res.send(employees);
  //   }
});

module.exports = router;
