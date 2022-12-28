//Schema for the Employee
const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const {isEmail}=require("validator")

const EmployeeSchema=new Schema({
    email:{
        title:String,
        required:[true,"Email can't be empty"],
        validate:[isEmail,"Enter valid email"]
    },
    username:{
        title:String,
        required:[true,"USername can't be empty"],
    },
    password:{
        title:String,
        required:true,
        minLength:[6,"Min length of the password is 6 characters"]
    },
    skills:[{
        skill_name:{
            type:Schema.Types.skill_name,
            ref:"Skills",
            required:true,
        },
        level:{
            type:String,
            required:true,
        }
    }]

});

module.exports=mongoose.model("Employee",EmployeeSchema)