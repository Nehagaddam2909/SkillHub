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


export function SIGNUP({signup,setSignup}) {
  let history=useNavigate();
  const [first,setfirst]=useState("")
  const [last,setlast]=useState("")
  const [loc,setloc]=useState("")
  const [dept,setdept]=useState("")
  const [pos,setpos]=useState("")
  const [jod,setjod]=useState("")
  const [gen,setgen]=useState("Female")
  const [email,setemail]=useState("")
  const [pass,setpass]=useState("")
  
  const handleChange=(e,s)=>{
    // console.log(e,s)
    if(s==='first')
    {
        setfirst(e.target.value)
        signup['first']=first
    }

    if(s==='last')
    {
        setlast(e.target.value)
        signup['last']=last
    }
    if(s==='loc')
    {
        setloc(e.target.value)
        signup['location']=loc
    }
    if(s==='dept')
    {
        setdept(e.target.value)
        signup['dept']=dept
    }
    if(s==='pos')
    {
        setpos(e.target.value)
        signup['pos']=pos
    }
    if(s==='jod')
    {
        setjod(e.target.value)
        signup['jod']=jod
    }
    if(s==='gen')
    {
        setgen(e.target.value)
        signup['gen']=gen
    }
    if(s==='email')
    {
        setemail(e.target.value)
        signup['email']=email
    }
    if(s==='pass')
    {
        setpass(e.target.value)
        signup['pass']=pass
    }
    setSignup(signup)
  
    // console.log(signup)
}

  return (
    <>
      
      
              <div className="flex justify-between mb-3 flex-row">
                  <div className="pr-2">
                    <input type="text" id="FirstName" className="block w-full px-3 py-2.5  black text-x border border-gray-300 sm:text-xs focus:outline-blue-500"  placeholder="First Name"
                    value={first} onChange={(e)=>(handleChange(e,"first"))} required/>
                  </div>
                  <div className="pl-2">
                    <input type="text" id="LastName" className="block w-full px-3 py-2.5   black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Last Name"
                    value={last} onChange={(e)=>(handleChange(e,"last"))} required/>
                  </div>
              </div>
              <div className="flex justify-between mb-3 flex-row">
                  <div className="pr-2">
                    <input type="text" id="Department" className="block w-full px-3 py-2.5  black border border-gray-300 sm:text-xs focus:outline-blue-500"  placeholder="Department"
                    value={dept} onChange={(e)=>(handleChange(e,"dept"))} required/>
                  </div>
                  <div className="pl-2">
                    <input type="text" id="Position" className="block w-full px-3 py-2.5  black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Position"
                    value={pos} onChange={(e)=>(handleChange(e,"pos"))} required />
                  </div>
              </div>
              
              <div className="flex justify-between mb-3 flex-row">
                <div className=" w-1/2 flex justify-center">

                <label className="w-1/2 block py-2" required>Gender:</label>
                    <select className="block bg-white border border-grey-300 focus:outline-blue-500"  value={gen} onChange={(e)=>(handleChange(e,"gen"))} > 

                      <option value={"Female"}>Female</option>
                      <option value={"Male"}>Male</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                  <div className="w-1/2 pl-2">
                  <input type="text" id="location" className="block w-full px-3 py-2 sm:text-xs border border-gray-300  focus:outline-blue-500"  placeholder="Location"
                  value={loc} onChange={(e)=>(handleChange(e,"loc"))} required/>
                  </div>
              </div>
              
              <div className="flex mb-3">
                <label className="w-1/2 py-2 pl-2">Select Joining date</label>
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="date" id="JD" className="block w-1/2 px-3 py-2.5 mb-3  black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder=""
                value={jod} onChange={(e)=>(handleChange(e,"jod"))} required/>

              </div>

              <div className="mb-3">
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="email" id="Email" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Enter Email"
                value={email} onChange={(e)=>(handleChange(e,"email"))} required/>

              </div>

              <div className="mb-5 md:mb-6">
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="password" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Enter Password"
                value={pass} onChange={(e)=>(handleChange(e,"pass"))} required/>

              </div>
             
             
    </>
  );
}

export default SIGNUP;
