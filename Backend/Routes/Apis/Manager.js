const router = require("express").Router();
const mongoose = require("mongoose");
const Employee = require("../../Models/Employee");
const { requireAuth } = require("../../Controllers/index");
//API for the employee data
router.post("/getEmployee",async (req, res) => {
  let {gender,location,department,position}=req.body
  if(department==='All') 
      department=' *'
  if(location==='All')
    location=" *"
  if(position==='All')
    position=" *"

  if(gender==='All')
    gender=" *"
  const data=await Employee.aggregate([
    {
      $match:{
      $and:[{Department:{ $regex: department} },{Position:{ $regex: position} },{Location:{ $regex: location} },{Gender:{ $regex: gender} }]
      }
    },
    {
      "$lookup": {
        "from": "skills",
        "localField": "Skills.skill_id",
        "foreignField": "_id",
        "as": "product"
      }
    },
    {
      $project: {
        FirstName:"$FirstName",
        LastName:"$LastName",
        Gender:"$Gender",
        JoinDate:"$JoinDate",
        Department:"$Department",
        Location:"$Location",
        Position:"$Position",
        Email:"$Email",
        Password:"$Password",
        about:"$about",
        highlight:"$highlight",
        portfolio:"$portfolio",
        github:"$github",
        linkedIn:"$linkedIn",

        // Skills:"$product"
        Skills: {
          $map: {
            input: "$Skills",
            as: "item",
            in: {
              skill_id: {
                $arrayElemAt: [
                  {
                    $filter: {
                      input: "$product",
                      as: "prod",
                      cond: {
                        $eq: [
                          "$$prod._id",
                          "$$item.skill_id"
                        ]
                      }
                    }
                  },
                  0
                ]
              },
              quantity: "$$item.quantity",
              YOE: "$$item.YOE",
              level: "$$item.level"
            }
          }
        }
      }
    }
  
  ])
      
  if(data) {
      res.json({ Success: true, data: data });
    }
  else res.json({ Success: false, message: err });
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
