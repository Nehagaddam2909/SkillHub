const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const { requireToAuth, checkUser } = require("./middleware/authMiddleware");

// npm i cookie-parser
const cookieParser = require("cookie-parser");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://chauhan:book1234@cluster0.wdvykrp.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3000, () => {
      console.log("listening... on port 3000");
    })
  )
  .catch((err) => console.log("here error:..........", err));

// routes
// apply checkUser middleware to every get request
app.get("*", checkUser);

app.get("/", (req, res) => res.render("home"));
app.get("/Operation", requireToAuth, (req, res) => res.render("Operation"));

app.use(authRoutes);

// cookies
// app.get("/set-cookies", (req, res) => {
//   // res.setHeader("Set-Cookie", "newUser=true"); //method-1
//   res.cookie("newUser", false); //meth-2  //if  already created then it will update it
//   res.cookie("isEmployee", true);
//   // thired argument can be-->option argument
//   res.cookie("isStudent", true, {
//     maxAge: 1000 * 60 * 60 * 24,
//     secure: true,
//     httpOnly: true,
//   }); //max-age in mili_sec in which cookie get expires| secure: true -->implie it will send over only https:type site |httpOnly: true-->make can't access by js or DOM as other document.cookie

//   res.send("you got the cookies");
// });

// app.get("/read-cookies", (req, res) => {
//   const cookies = req.cookies;
//   console.log(cookies);
//   console.log(cookies.newUser);
//   res.json(cookies);
// });
