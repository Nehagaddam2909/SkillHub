const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireToAuth = (req, res, next) => {
  token_from_server = req.cookies.A4hackathon_jwt;
  //   console.log(req, req.cookies);

  //   check web token is exits & it's verified
  if (token_from_server) {
    jwt.verify(
      token_from_server,
      "A4hackathon secret key",
      (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.redirect("/login");
        } else {
          console.log(decodedToken);
          next();
        }
      }
    );
  } else {
    console.log("token is not verify/created");
    res.redirect("/login");
  }
};

// check current user
const checkUser = (req, res, next) => {
  token_from_server = req.cookies.A4hackathon_jwt;
  if (token_from_server) {
    // verify token
    jwt.verify(
      token_from_server,
      "A4hackathon secret key",
      async (err, decodedToken) => {
        console.log("--------------->#############-->", res);
        if (err) {
          console.log(err.message);

          // res.redirect("/login");
          // do nothing and go forword as your flow
          res.locals.user = null;
          console.log("res.local-->user.:", res.locals.user);
          //   console.log("locals--------------------------------:#####", res);
          next();
        } else {
          console.log(decodedToken);
          // since decodedToken -->consist of payload+secretkey+extra
          // therefore we can get id-->then check these user id in database to check if they are exits of not
          let user = await User.findById(decodedToken.id);
          res.locals.user = user; //user-->as properties
          console.log("res.local-->user..:", res.locals.user);
          //   console.log("locals:", res.locals);
          //   console.log("locals--------------------------------:", res);
          next();
        }
      }
    );
  } else {
    res.locals.user = null;
    console.log("res.local-->user...:", res.locals.user);
    // console.log("locals:", res.locals);
    // console.log("locals--------------------------------##:", res);
    next();
  }
};

module.exports = { requireToAuth, checkUser };
