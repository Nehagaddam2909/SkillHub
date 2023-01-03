const Employee = require("../Models/Employee");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");
const cookies = require("cookies");
//require Authentication
const requireAuth = (req, res, next) => {
  const token = req.body.cookie;

  // console.log(token);
  if (token) {
    // token = token.jwt;
    jwt.verify(token, process.env.Secrete_key, (err, decodedToken) => {
      if (err) {
        res.redirect("http://localhost:5173/auth/sign-in");
        // res.redirect("/");
      } else {
        // console.log(decodedToken);
        req.body.id = decodedToken.id;
        next();
      }
    });
  } else {
    console.log("Cookie not setted")
    res.redirect("http://localhost:5173/auth/sign-in");

    //res.redirect("")
  }
};

// const requireAuth = (req, res, next) => {
//   token_from_server = req.cookie;

//   if (token_from_server) {
//     jwt.verify(
//       token_from_server,
//       process.env.Secrete_key,
//       (err, decodedToken) => {
//         if (err) {
//           console.log(err.message);
//           res.redirect("http://localhost:5173/auth/sign-in");
//         } else {
//           console.log(decodedToken);
//           next();
//         }
//       }
//     );
//   } else {
//     console.log("token is not verify/created");
//     res.redirect("http://localhost:5173/auth/sign-in");
//   }
// };

module.exports = { requireAuth };
//controller for the post login

//
