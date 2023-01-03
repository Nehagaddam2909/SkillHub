//Schema for the Manager
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
  username: {
    type: Schema.Types.username,
    ref: "Employee",
  },
  password: {
    type: Schema.Types.password,
    ref: "Employee",
    minLength: [8, "Min length of the password is 8 characters"],
  },
});

module.exports = mongoose.model("Manager", ManagerSchema);

//Encrypt the password
ManagerSchema.pre("save", async function (next) {
  // console.log(this)
  const salt = await bcrypt.genSalt();
  this.Password = await bcrypt.hash(this.Password, salt);
  // console.log(this.Password)
  next();
});

//Checking the login
ManagerSchema.statics.login = async function (username, password) {
  const auth = await this.findOne({ username: username });
  if (auth) {
    const dd = await bcrypt.compare(password, auth.Password);

    if (dd) {
      // console.log(auth)
      return auth;
    }
    throw Error("Incorrect password ");
  }
  throw Error("Incorrecet email");
};

module.exports = mongoose.model("Employee", EmployeeSchema);
