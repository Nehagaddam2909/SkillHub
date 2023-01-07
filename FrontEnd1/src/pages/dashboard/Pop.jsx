import React from 'react';
import Popup from 'reactjs-popup';
import './Pop.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
 
  
const Pop=({id,changeToggle,toggleOverlay}) => {
    const handleSkill=(e)=>{
        changeToggle(false)
        toggleOverlay(false)
    } 
   return( 
  <div>
          <div className= "bg-white z-10 w-[10rem] h-[10rem] absolute top-[10rem] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl px-8 py-5 space-y-5">
                <Button varient="gradient" color="red" onClick={e=>handleSkill(e)}>Close</Button>

                <label>{id}</label>
            </div>
        </div>  
   );
 
   }

export default Pop;
