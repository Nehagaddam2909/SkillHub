import { useEffect } from "react";
import { useCookies } from "react-cookie";
import {Card, CardBody, CardHeader, CardFooter, Avatar, Typography, Tabs, IconButton, TabsHeader, Menu, MenuHandler, MenuList, MenuItem, Tab, Switch, Tooltip, Button, Progress} from "@material-tailwind/react";
import {ClockIcon, CheckIcon, EllipsisVerticalIcon, ArrowUpIcon,} from "@heroicons/react/24/outline";
import { statisticsCardsData, statisticsChartsData, projectsTableData, ordersOverviewData} from "@/data";
import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon, ExclamationCircleIcon, DocumentTextIcon, MapIcon, InboxIcon,} from "@heroicons/react/24/solid";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import axios from "axios";
import { useState } from "react";
import Info from "./Profile/Info";
import Skill_card from "./Profile/Skill_card";
import.meta.env.VITE_APP_API_URL
import { fetchData } from "./Profile/fetchData";

export function Profile() {
  const [date,setDate]=useState([])
  const [cookies, setCookie] = useCookies();
  const [data,setData]=useState([])
  const [keys,setKeys]=useState([])
  const {state} = useLocation();
  let history=useNavigate();
  useEffect( ()=>{
    async function fetchData(token){
      //  console.log(token)
       await axios.post(`${import.meta.env.VITE_APP_API_URL
       }/employee/123`,
       {  
        cookie:token,
       },
       {  
       withCredentials:true 
        } // could also try 'same-origin'
  
       ).then(async (d)=>{
        // console.log(await d.data)
        const dd=await d.data
        console.log(dd)     
        if(dd.Success)
        {
          dd.data[0]["JoinDate"]=dd.data[0]["JoinDate"].split( "T" )[0]
          setData(dd.data[0])
          
        }
        else
          {
            console.log("Errorooo")
            history("/auth/sign-in")
          }
  
       }).catch(e=>{
          history("/auth/sign-in")
      })
      
      //  return data
    }
  // console.log("stat",state)
      if(!state)
      {
        fetchData(cookies.jwt)
      }
      else 
      {
        setData(state)
        // console.log(state)
      }

      // console.log("data: ",data)
  },[])


  const handleClick=(e)=>{
    console.log(e)
    history("/auth/edit-profile",{state:data})
  }
  return (
    <div>
      
      <div 
      className=
      "relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
       </div>
      <div className="flex flex-col md:flex-col lg:flex-row justify-center">
      {data && <Info data={data} handleClick={handleClick} state={state}></Info>}
      <div className="my-8">

      {/* //Card for the skils array    */}
      {data && <Skill_card data={data} state={state}/>}
      </div>
     
    </div>
    
    </div>
  );
}

export default Profile;
