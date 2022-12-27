//Schema for the Manager
const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const ManagerSchema= new Schema({
    username:{
        type:Schema.Types.username,
        ref:"Employee"
    },
    password:{
        type:Schema.Types.password,
        ref:"Employee"
    }
})

module.exports=mongoose.model("Manager",ManagerSchema);
