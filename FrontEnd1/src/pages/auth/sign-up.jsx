import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,Option,
  Alert,
  showAlerts,
} from "@material-tailwind/react";
import React from "react";
export function SignUp() {
  let history=useNavigate();
  const [first,changeFirst]=useState("")
  const [last,changeLast]=useState("")
  const [location,changeLoc]=useState("")
  const [dept,changeDept]=useState("")
  const [pos,changePos]=useState("")
  const [jod,changeJod]=useState("")
  const [gen,changeGen]=useState("Female")
  const [email,changeEmail]=useState("")
  const [pass,changePass]=useState("")
  const [alert,changAlert]=useState(false)
  const [text,changeColor]=useState("")

  const handleClick=async(e)=>{
   if(!first.length || !last.length || !location.length || !dept.length || !pos.length || !jod.length || !gen.length  || !email.length || !pass.length)
   {
    changeColor("All fields are mandatory....!!!")
    changAlert(true)
    return ;
   }
   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(validRegex))
      {
          changeColor("Enter valid email")
          changAlert(true)
          return ;
      }

    let res=pos.toLocaleLowerCase();
    let ismanager=(res.indexOf("manager")>=0?1:0);

    const d= await fetch("http://localhost:4000/signup",{
      method:"POST",
      body:JSON.stringify({"FirstName":first,"LastName":last,"Gender":gen,"JoinDate":jod,"Location":location,
      "Department":dept,"Position":pos,"Email":email,"Password":pass,"ismanager":ismanager}),
      headers:{"Content-type":"application/json"}
    })
    const jss=await d.json();
    if(!jss.Success)
    { 
        changeColor(jss.message)
        changAlert(true)
        
    }
    else{
      changAlert(false)
      
      history("/")
    }
    // console.log(jss)
  }

  return (
    <>
      
      <div className="absolute inset-0 z-0 h-full w-full bg-blue-700/50" />
      <Alert
              show={alert}
              color={"red"}
              dismissible={{
                onClose: () =>
                  changAlert(false)
              }}
            >
             {text}
            </Alert>
     <div className="absolute  grid w-screen h-screen place-items-center ">
      <div className="absolute block -ml-6 p-6 w-29 md:w-28 border bg-white shadow-lg">
          
            <Typography variant="h3"
                  color="black"
                  className="xl font-bold">Signup</Typography>
            <Typography variant="paragraph"
                  color="black"
                  className="text-xs">Please fill the from to create the account</Typography><hr className="my-2 w-full h-2 border-black"/>
              <div className="flex justify-between mb-3 flex-row">
                  <div className="pr-2">
                    <input type="text" id="FirstName" className="block w-full px-3 py-2.5  black text-x border border-gray-300 sm:text-xs focus:outline-blue-500"  placeholder="First Name"
                    value={first} onChange={(e)=>(changeFirst(e.target.value))} required/>
                  </div>
                  <div className="pl-2">
                    <input type="text" id="LastName" className="block w-full px-3 py-2.5   black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Last Name"
                    value={last} onChange={(e)=>(changeLast(e.target.value))} required/>
                  </div>
              </div>
              <div className="flex justify-between mb-3 flex-row">
                  <div className="pr-2">
                    <input type="text" id="Department" className="block w-full px-3 py-2.5  black border border-gray-300 sm:text-xs focus:outline-blue-500"  placeholder="Department"
                    value={dept} onChange={(e)=>(changeDept(e.target.value))} required/>
                  </div>
                  <div className="pl-2">
                    <input type="text" id="Position" className="block w-full px-3 py-2.5  black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Position"
                    value={pos} onChange={(e)=>(changePos(e.target.value))} required />
                  </div>
              </div>
              
              <div className="flex justify-between mb-3 flex-row">
                <div className=" w-1/2 flex justify-center">

                <label className="w-1/2 block py-2" value={gen} onChange={(e)=>(changeGen(e.target.value))} required>Gender:</label>
                    <select className="block bg-white border border-grey-300 focus:outline-blue-500"> 

                      <option value={"Female"}>Female</option>
                      <option value={"Male"}>Male</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                  <div className="w-1/2 pl-2">
                  <input type="text" id="location" className="block w-full px-3 py-2 sm:text-xs border border-gray-300  focus:outline-blue-500"  placeholder="Location"
                  value={location} onChange={(e)=>(changeLoc(e.target.value))} required/>
                  </div>
              </div>
              
              <div className="flex mb-3">
                <label className="w-1/2 py-2 pl-2">Select Joining date</label>
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="date" id="JD" className="block w-1/2 px-3 py-2.5 mb-3  black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder=""
                value={jod} onChange={(e)=>(changeJod(e.target.value))} required/>

              </div>

              <div className="mb-3">
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="email" id="Email" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Enter Email"
                value={email} onChange={(e)=>(changeEmail(e.target.value))} required/>

              </div>

              <div className="mb-5 md:mb-6">
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="password" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Enter Password"
                value={pass} onChange={(e)=>(changePass(e.target.value))} required/>

              </div>
             
              <Button variant="gradient" className="text-sm" onClick={handleClick} fullWidth>
              Sign up
            </Button>


            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign In
                </Typography>
              </Link>
            </Typography>
      </div>
    </div>
    </>
  );
}

export default SignUp;
