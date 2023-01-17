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


export function SIGNUP({signup,setSignup,state}) {
  let history=useNavigate();
  const [first,setfirst]=useState(signup.first)
  const [last,setlast]=useState(signup.last)
  const [loc,setloc]=useState(signup.location)
  const [dept,setdept]=useState(signup.dept)
  const [pos,setpos]=useState(signup.pos)
  const [jod,setjod]=useState(signup.jod)
  const [gen,setgen]=useState(signup.gen)
  const [email,setemail]=useState(signup.email)
  const [pass,setpass]=useState(signup.pass)

  const handleChange=(val,s)=>{
    // console.log(e,s)
    const st=signup
    if(s==='first')
    {
        setfirst(val)
        st['first']=val
    }

    if(s==='last')
    {
        setlast(val)
        st['last']=val
    }
    if(s==='loc')
    {
        setloc(val)
        st['location']=val
    }
    if(s==='dept')
    {
        setdept(val)
        st['dept']=val
    }
    if(s==='pos')
    {
        setpos(val)
        st['pos']=val
    }
    if(s==='jod')
    {
        setjod(val)
        st['jod']=val
    }
    if(s==='gen')
    {
        setgen(val)
        st['gen']=val
    }
    if(s==='email')
    {
        setemail(val)
        st['email']=val
    }
    if(s==='pass')
    {
        setpass(val)
        st['pass']=val
    }
    setSignup(st)
  
    // console.log(signup)
}

  return (
    <>
      
      
              <div className="flex justify-between mb-3 flex-row">
                  <div className="pr-2">
                    <input type="text" id="FirstName" className="block w-full px-3 py-2.5  black text-x border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize"  placeholder="First Name"
                    value={first} onChange={(e)=>(handleChange(e.target.value,"first"))} required/>
                  </div>
                  <div className="pl-2">
                    <input type="text" id="LastName" className="block w-full px-3 py-2.5   black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder="Last Name"
                    value={last} onChange={(e)=>(handleChange(e.target.value,"last"))} required/>
                  </div>
              </div>
              <div className="flex justify-between mb-3 flex-row">
                  <div className="pr-2">
                    <input type="text" id="Department" className="block w-full px-3 py-2.5  black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize"  placeholder="Department"
                    value={dept} onChange={(e)=>(handleChange(e.target.value,"dept"))} required/>
                  </div>
                  <div className="pl-2">
                    <input type="text" id="Position" className="block w-full px-3 py-2.5  black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder="Position"
                    value={pos} onChange={(e)=>(handleChange(e.target.value,"pos"))} required />
                  </div>
              </div>
              
              <div className="flex justify-between mb-3 flex-row">
                <div className=" w-1/2 flex justify-center">

                <label className="w-1/2 block py-2" required>Gender:</label>
                    <select className="block bg-white border border-grey-300 focus:outline-blue-500"  value={gen} onChange={(e)=>(handleChange(e.target.value,"gen"))} > 

                      <option value={"Female"}>Female</option>
                      <option value={"Male"}>Male</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                  <div className="w-1/2 pl-2">
                  <input type="text" id="location" className="block w-full px-3 py-2 sm:text-xs border border-gray-300  focus:outline-blue-500 capitalize"  placeholder="Location"
                  value={loc} onChange={(e)=>(handleChange(e.target.value,"loc"))} required/>
                  </div>
              </div>
              
              <div className="flex mb-3">
                <label className="w-1/2 py-2 pl-2">Select Joining date</label>
                <input type="date" id="JD" className="block w-1/2 px-3 py-2.5 mb-3  black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder=""
                value={jod} onChange={(e)=>(handleChange(e.target.value,"jod"))} required/>

              </div>

               {state && <div className="mb-3">
                <input type="email" id="Email" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Enter Email"
                value={email} onChange={(e)=>(handleChange(e.target.value,"email"))} required disabled/>

              </div>}
              {!state && <div className="mb-3">
                <input type="email" id="Email" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Enter Email"
                value={email} onChange={(e)=>(handleChange(e.target.value,"email"))} required/>

              </div>}

              {state && <div className="mb-5 md:mb-6">
                <input type="password" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder="Enter Password"
                value={pass} onChange={(e)=>(handleChange(e.target.value,"pass"))} required disabled/>

              </div>}
              {!state && <div className="mb-5 md:mb-6">
                <input type="password" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder="Enter Password"
                value={pass} onChange={(e)=>(handleChange(e.target.value,"pass"))} required/>

              </div>}
             
             
    </>
  );
}

export default SIGNUP;
