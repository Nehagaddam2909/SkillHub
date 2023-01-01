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
 

  return (
    <div className="mx-auto my-8 md:my-15 flex min-w-sm flex-col gap-8">
     
       
            
       <Typography variant="h3" color="purple">Skills</Typography>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        <div className="px-4 md:px-8 justify-center bg-white shadow-md rounded-xl h-28 m-4">
          <input type="radio" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-4 md:px-8 justify-center bg-white shadow-md rounded-xl h-28 m-4">
          <input type="radio" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-4 md:px-8 justify-center bg-white shadow-md rounded-xl h-28 m-4">
          <input type="radio" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-4 md:px-8 justify-center bg-white shadow-md rounded-xl h-28 m-4">
          <input type="radio" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
       </div>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       <div className="flex-col px-1 md:px-3 mx-4 justify-center bg-white shadow-md rounded-xl h-24 m-4">
          <input type="checkbox" name="domain1" className="" value={t} onChange={e=>changeToggle(!t)}></input>
          <label httmfor="domain1" className="text-xl">Technical</label>
          <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ${t?"hidden":""}`}>
          <select className=" bg-white mb-2 lg:mb-0">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
          <input type="number" className="w-full border border-black focus:outline-purple" name="exp"></input>
          </div>
        </div>
        <div className="px-1 md:px-2 mx-4 justify-center bg-white shadow-md rounded-xl h-24 m-4">
          <input type="checkbox" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-1 md:px-2 mx-4 justify-center bg-white shadow-md rounded-xl h-24 m-4">
          <input type="checkbox" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-1 md:px-2 mx-4 justify-center bg-white shadow-md rounded-xl h-24 m-4">
          <input type="checkbox" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-1 md:px-2 mx-4 justify-center bg-white shadow-md rounded-xl h-24 m-4">
          <input type="checkbox" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-1 md:px-2 mx-4 justify-center bg-white shadow-md rounded-xl h-24 m-4">
          <input type="checkbox" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-1 md:px-2 mx-4 justify-center bg-white shadow-md rounded-xl h-24 m-4">
          <input type="checkbox" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-1 md:px-2 mx-4 justify-center bg-white shadow-md rounded-xl h-24 m-4">
          <input type="checkbox" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
        <div className="px-1 md:px-2 mx-4 justify-center bg-white shadow-md rounded-xl h-24 m-4">
          <input type="checkbox" name="domain" className=""></input>
          <label className="text-xl">Technical</label>
        </div>
       </div>
       
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
          
        </CardBody>
      </Card>
    </div>
  );
}

export default Notifications;
