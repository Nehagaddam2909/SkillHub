//Schema for the Employee
const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const EmployeeSchema=new Schema({
    email:{
        title:String,
        required:true,
    },
    username:{
        title:String,
        required:true,
    },
    password:{
        title:String,
        required:true,
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