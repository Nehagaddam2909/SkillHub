const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "username not filled"],
    unique: [true],
    lowercase: true,
  },
  //   use validate to check email is exactly an email using natural lang-->install-->npm i validator
  //   email: { type: String, required:[true,'message as email not filled'], unique: true, lowercase: true,validate:[()=>{},'message if not not valid email it is'] },
  email: {
    type: String,
    required: [true, "plese enter email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "message if not not valid email it is"],
  },
  password: {
    type: String,
    required: [true, "please make password"],
    minlength: 8,
    maxlength: 15,
  },
});

// act as middleware
// fire a function 'save' after a documnent 'doc' saved to the db
userSchema.post("save", function (doc, next) {
  console.log("new user has created & saved", doc);
  next();
});

// fire a function 'save' before a documnent 'doc' saved to the db
userSchema.pre("save", async function (next) {
  // encypt the user password --> npm install bcrypt
  // hashing password by hashing algo

  // 1-generating salt which will be applied before the original password
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  console.log("new user about to be created & saved", this);
  next();
});

// stratic method for login user
userSchema.statics.login = async function (userName, email, password) {
  const user = await this.findOne({ userName: userName });
  const userEmail = await this.findOne({ email: email });
  if (user) {
    // since abhi password stirng me h use bhi bcrypt karna hoga then compare hoga
    const auth = await bcrypt.compare(password, user.password);
    if (userEmail) {
      if (auth) {
        console.log("authethication completed user founded and matched🤩");
        return user;
      }
      throw Error("Incorrect password!");
    }
    throw Error("Incorrect email!");
  }
  throw Error("Incorrect username!");
};

const User = mongoose.model("user", userSchema);
module.exports = User;
