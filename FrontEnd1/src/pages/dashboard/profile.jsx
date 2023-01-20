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
import { fetchData } from "./Profile/fetchData";
import Contact from "./Profile/Contact";
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
        if(cookies && cookies.jwt)
          fetchData(cookies.jwt)
        else  
          history("/auth/sign-in")
      }
      else 
      {
        state["JoinDate"]=state["JoinDate"].split( "T" )[0]
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
    <div className=" text-black mt-8 font-serif">
      
      
      <div className="flex flex-col md:flex-col lg:flex-row justify-center">
      {data && <Info data={data} handleClick={handleClick} state={state}></Info>}
      <div className="flex flex-col my-3 ">
      {data && <Contact></Contact>}
      <div className="my-4">
        {data && <Skill_card data={data} state={state}/>}

      </div>

      {/* //Card for the skils array    */}
      
      </div>
     
    </div>
    </div>
  );
}

export default Profile;
