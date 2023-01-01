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

export function Skills() {
  
  const [formFields,setformFields]=useState([{skill_name:'',level:'',YOE:''}])
  const handleFormChande=(event,index)=>{
    const s=event.target.name;
    const data=[...formFields]
    data[index][s]=event.target.value;
    setformFields(data)
    
  }

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

  return (
    <div className="mx-auto my-10 md:my-20 flex max-w-screen-lg flex-col gap-8">
     
        <Typography variant="h3" className="center" color=" blue-gray">
            Add Skills
          </Typography>
        {formFields.map((form,index)=>{
          return(
            <Card className="">
        <CardBody className="flex flex-col gap-4 p-4">
            <div key={index} className="bg-grey">
              <div className="flex flex-col sm:text-xs md:flex-row space-x-0 md:space-x-4">
              <input className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 text-base sm:text-xs focus:outline-blue-500" type="text" value={form.skill_name} onChange={event=>handleFormChande(event,index)} name="skill_name" placeholder="Enter Skill name"></input>
              <input className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 text-base sm:text-xs focus:outline-blue-500" type="text" value={form.level} onChange={event=>handleFormChande(event,index)} name="level" placeholder="Enter skill level"></input>
              </div>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <input className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 text-base sm:text-xs focus:outline-blue-500" type="text" value={form.YOE} onChange={event=>handleFormChande(event,index)} name="YOE" placeholder="Enter number of years experience"></input>
              <input className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 text-base sm:text-xs focus:outline-blue-500" type="text" value={form.YOE} onChange={event=>handleFormChande(event,index)} name="YOE" placeholder="Select skill domain"></input>
              </div>
             <div className="flex space-x-2">
            <Button variant="gradient" 
            color="green"
            className="text-sm bg-green-600" onClick={onS} fullWidth>
              Add
            </Button>
            <Button variant="gradient"
            color="red" className="text-sm bg-red-600" onClick={onR} fullWidth>
              Remove
            </Button>

      </div>
             
            </div>
            </CardBody>
      </Card>
            
          )
        })
      }
        
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

export default Skills;
