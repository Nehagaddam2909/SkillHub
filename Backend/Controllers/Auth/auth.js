const Employee = require("../../Models/Employee");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const Manager = require("../../Models/Manager");

const age = 24 * 60 * 60 * 3;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.Secrete_key, {
    expiresIn: age,
  });
};

// Here add the basic backend code
const handleSignup = async (req, res) => {
  const {
    FirstName,
    LastName,
    Gender,
    JoinDate,
    Location,
    Department,
    Position,
    Email,
    Password,
    ismanager,
    about,
    highlight,
    portfolio,
    github,
    linkedIn

  } = req.body;
  // console.log(ismanager)
  try {
    const user = await Employee.create({
      FirstName,
      LastName,
      Gender,
      JoinDate,
      Location,
      Department,
      Position,
      Email,
      Password,
      about,
      highlight,
    portfolio,
    github,
    linkedIn

    });
    // console.log(user)
    //encode the password
    if (ismanager) {
      const managr = await Manager.create({ id: user._id });
      // console.log(managr);
    }
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: false, maxAge: age * 1000 });
    res.cookie("name", FirstName, { httpOnly: false, maxAge: age * 1000 });
    // console.log("-----Signup successful-----");
    // console.log(user)
    // res.body._id=user._id
    res.json({ Success:true,data: user._id });
  } catch (err) {
    console.log(err);
    res.json({ Success: false, message: err });
  }

};

//login form with JWT

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  // console.log("-----email-pass-----:", email, password);

  try {
    const user = await Employee.login(email, password);
    if(user)
    {
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: false, maxAge: age * 1000 });
      res.cookie("name", user.FirstName, { httpOnly: false, maxAge: age * 1000 });
      console.log(user)
      // res.body.id=user._id
      res.json({ Success: true, data: user._id });
    }
    else
      res.json({Success:false,message:"user not found"})

    // console.log("....login successful....");
  } catch (err) {
    res.json({ Success: false, message: err.message });
  }
};

// logout------

// const logout = (req, res) => {
//   // Invalidate the user's token
//   console.log("req.user:", req.user);
//   req.user.token = null;
//   req.user.save((err) => {
//     if (err) {
//       return res.send({ "gotted error": err });
//     }

//     res.send({ success: true });
//   });
// };

const logout = (req, res) => {
  // Send a successful response to the client
  console.log("logout success........#");
  // Remove the JWT cookie
  res.clearCookie("jwt", { path: "/" });
  res.clearCookie("name", { path: "/" });
  res.send({ success: true });
};

module.exports = { handleSignup, handleLogin, logout };
