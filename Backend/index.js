//Basic Express setup
const express = require("express");
const app = express();

//url encoded string
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mongoose connection
const mongoose = require("mongoose");

//Environment setup
const dotenv = require("dotenv").config();
const router = require("./Routes/Apis/Skills");

// Used to allow the react to access the backend API.
const cors = require("cors");
const { urlencoded } = require("express");

//token authentication
const token = require("./Routes");
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", router);
app.use(token);
//Handling the '/' URL
app.use("/", (req, res) => {
  res.send("<h1>Hello to the world!!!</h1>");
});
mongoose.set("strictQuery", false);
//MongoDb connection
mongoose.connect(process.env.URI).then((result) => {
  //Listen to server
  app.listen(process.env.PORT, () => {
    console.log("Server Started!!!");
  });
});
