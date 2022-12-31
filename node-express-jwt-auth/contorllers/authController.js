const User = require("../models/User");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code); //err.code==>happen when duplicacy is happen in email of username
  let Myerror = {
    userName: "",
    email: "",
    password: "",
    isDuplicate: false,
    Duplicate: "",
  };
  // login incorrect mail/username/password
  if (err.message === "Incorrect password!") {
    Myerror.password = "Ohh! Incorrect password😑!";
  }
  if (err.message === "Incorrect email!") {
    Myerror.email = "That email is not registered😶!";
  }
  if (err.message === "Incorrect username!") {
    Myerror.userName = "That username is not registered😔!";
  }

  //   duplication error code
  if (err.code === 11000) {
    // console.log("-----rr:", err.keyPattern);
    // console.log("my duplicate keys:", Object.keys(err.keyPattern)[0]);
    // Myerror["isDuplicate"] = true;
    // Myerror["Duplicate"] = Object.keys(err.keyPattern)[0];

    Myerror[Object.keys(err.keyPattern)[0]] =
      "duplicate " + Object.keys(err.keyPattern)[0] + " founded!🙄";
  }

  //   validation of error
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      Myerror[properties.path] = properties.message;
    });
    console.log("error-------------->", Myerror);
  }
  return Myerror;
};

// token creation function
const maxAge = 3 * 24 * 60 * 60; //3 day into sec
const createToken = (id) => {
  return jwt.sign({ id }, "A4hackathon secret key", { expiresIn: maxAge });
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log(userName, email, password);
  //   res.send("new signup");
  try {
    const user = await User.create({ userName, email, password });
    // just after creating the user into db-->.let create a jwt token for them
    const token = createToken(user._id);
    res.cookie("A4hackathon_jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });

    // res.status(201).json(user);
    res.status(201).json({ user: user._id });
  } catch (err) {
    // console.log(err);
    const errors = handleErrors(err);
    // res.status(400).send("error,user is not created");
    res.status(400).json({ errors });
  }
};
module.exports.login_post = async (req, res) => {
  const { userName, email, password } = req.body;
  // console.log(email, password);
  // res.send(req.body);
  try {
    const user = await User.login(userName, email, password);
    console.log(user);

    const token = createToken(user._id);
    res.cookie("A4hackathon_jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({ user: user._id, local_status: "success" });
  } catch (err) {
    const errors = handleErrors(err);
    // console.log("errrrror:", err);
    // console.log("msg:", err.message);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  // here we have to delete jwt token from server to logout

  // forhtese we make another jwt token same name as previous during signup/login--> and make expire within 1 millisec
  res.cookie("A4hackathon_jwt", "", { maxAge: 1 });
  res.redirect("/");
};
