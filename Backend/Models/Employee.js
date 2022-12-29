//Schema for the Employee
const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const {isEmail}=require("validator")

const EmployeeSchema=new Schema({
    email:{
        type:String,
        required:[true,"Email can't be empty"],
        validate:[isEmail,"Enter valid email"]
    },
    username:{
        type:String,
        required:[true,"USername can't be empty"],
    },
    password:{
        type:String,
        required:true,
        minLength:[6,"Min length of the password is 6 characters"]
    },
    skills:[{
        skill_id:{
            type:Schema.Types.ObjectId,
            ref:"Skills",
        },
        level:{
            type:String,
            required:true
        },
        yoe:{
            type:Number,
            required:true
        }
    }]

});

module.exports=mongoose.model("Employee",EmployeeSchema)