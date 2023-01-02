import React from "react";
import { useEffect,useState } from "react";

import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Notifications() {
  
 const data={
  "PM":[
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
  ],
  "HR":[
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
  ],
  "Management":[
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
  ],
  "Technical":[
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
    {
      skill_name:"abc",
      
    },
  ]
 }
 const dummy=[{
  skill_name:"abc",
  
},
{
  skill_name:"abc",
  
},
{
  skill_name:"abc",
  
},
{
  skill_name:"abc",
  
},
{
  skill_name:"abc",
  
}]
const d=Object.keys(data)
  const onS=(e)=>{
    const data=[...formFields]
    data.push({skill_name:'',level:'',YOE:''})
    console.log(data)
    setformFields(data)
  }
  const onR=(e)=>{
    const data=[...formFields]
   data.pop();
    setformFields(data)
  }

  const [t,changeToggle]=useState(true)
  const genData=[]
  return (
    <div className="mx-auto my-8 md:my-15 flex min-w-sm flex-col gap-8">
     
       
            
       <Typography variant="h3" color="purple">Skills</Typography>
       <div className="flex flex-wrap justify-between">
        
        <div className="flex items-center justify-center bg-white shadow-md rounded-xl h-28 w-[12rem] mb-2">
          <input type="radio" name="domain" className=""></input>
          <label className="text-center	 text-xl">Technical</label>
        </div>
        <div className="flex items-center justify-center bg-white shadow-md rounded-xl h-28 w-[12rem] mb-2">
          <input type="radio" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="flex items-center justify-center bg-white shadow-md rounded-xl h-28 w-[12rem] mb-2">
          <input type="radio" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="flex items-center justify-center bg-white shadow-md rounded-xl h-28 w-[12rem] mb-2">
          <input type="radio" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
       </div>

       {/* //Each Skill form */}
      
       <div className="flex flex-wrap justify-evenly">
       {
        dummy.map((ele,index)=>{
          return (
        <div className={`flex mb-3 justify-center items-center  shadow-md rounded-xl transition-all ease-in-out delay-150 w-32 h-28 ${t?"flex-row bg-white  text-purple-600 ":"flex-col bg-purple-600 text-white"} ` } >
          <input type="checkbox" id="index" className="hidden" value={t} onChange={e=>changeToggle(!t)}></input>
          <label htmlFor="index" className="text-xl">{ele.skill_name}</label>
          <div className={`grid grid-cols-1 md:grid-cols-1  text-white ${t?"hidden":""}`}>
            <select className="py-1 bg-transparent mb-2 mx-3 lg:mb-0 rounded-lg focus:outline-purle-600">
              <option className="text-black">Beginner</option>
              <option className="text-black">Intermediate</option>
              <option className="text-black">Expert</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-3 justify-center items-center">
              <label htmlFor="exp" className="hidden md:block">Exp: </label>
            <input type="number" className="-mt-1py-1 w-full px-2 bg-transparent rounded-lg focus:outline-purple-600" placeholder="Year of experience" name="exp"></input>

          </div>
        </div>
      </div>);
        })
      }

        
       </div>
      <Button varient="gradient" color="purple" className={`ml-3 w-[9rem] justify-center`} >Save Changes</Button>
       
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts with Icon
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          <label>dfghjk</label>
        </CardBody>
      </Card>
    </div>
  );
}

export default Notifications;
