import { useEffect } from "react";
import { useCookies } from "react-cookie";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  IconButton,
  TabsHeader,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tab,
  Switch,
  Tooltip,
  Button,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,

} from "@heroicons/react/24/outline";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";

import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
  ExclamationCircleIcon,
  DocumentTextIcon,
  MapIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import axios from "axios";
import { useState } from "react";


export function Profile() {
  const [date,setDate]=useState([])
  const [cookies, setCookie] = useCookies();
  const [data,setData]=useState([])
  const [keys,setKeys]=useState([])
  const {state} = useLocation();
  let history=useNavigate();
  useEffect( ()=>{
  async function fetchData(){
    const token=cookies.jwt;
    //  console.log(token)
     await axios.post("http://localhost:4000/employee/123",
     {  
      cookie:token,
     },
     {  
     withCredentials:true } // could also try 'same-origin'

     ).then(d=>{
      // console.log(d.data)
      if(d.data.Success)
      {
        // console.log(d.data)
        setData(d.data.data)
        const k=Object.keys(d.data.data)
        setKeys(k)
        

      }
       
     }).catch(err=>{
      history("/auth/sign-in")
      
     })
  }
  console.log("stat",state)
      if(!state)
        fetchData()
      else 
        setData(state)
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
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
      
        <CardBody className="p-4">
        {!state && <Menu placement="left-start">
              <MenuHandler className="float-right">
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6 capitalize"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                

                <MenuItem><button onClick={e=>handleClick(e)}>Edit</button></MenuItem>
              </MenuList>
            </Menu>}
        
          <div className="mb-10 flex items-center justify-center gap-6">
            
            <div className="flex items-center gap-6">
             
              <div className="w-[18rem]">
                <div className="flex flex-col h-[8rem] bg-gray-100 items-center rounded-lg text-black justify-center mb-3">
                <Typography variant="h6" >
                  {data && data["FirstName"] } {data && data["LastName"] }


              </Typography>
              <Typography variant="paragraph" >
                  {data && data["Position"] } | {data && data["Department"] }


              </Typography>
                
              <div className="flex justify-evenly w-full">
              <Button variant="gradient" color="white" href="mailto:">Bussines Card</Button>
              
             <Button variant="gradient" color="white">
             Email</Button>
              </div>
                </div>
               
                <Typography variant="h6" className="justify-center">About</Typography>
                <Typography variant="" className="text-[.85rem]">{data && (data["about"] || "Some random text goes here")}</Typography>
                <Typography
                  variant=""
                  className="mt-3 text-[.9rem] font-bold"
                >
                  Demographics:
                </Typography>

                <div className="flex flex-col">
            <div className="w-full  flex space-x-5 justify-between">
              <Typography variant="" className="text-xs  mt-2">First Name</Typography>
              <Typography variant="" className="text-xs  mt-2 capitalize">{data && data["FirstName"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="" className="text-xs  mt-2 capitalize">Last Name</Typography>
              <Typography variant="" className="text-xs  mt-2 capitalize" >{data && data["LastName"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="" className="text-xs  mt-2 capitalize">Department</Typography>
              <Typography variant="" className="text-xs  mt-2 capitalize">{data && data["Department"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="" className="text-xs  mt-2 capitalize">Position</Typography>
              <Typography variant="" className="text-xs  mt-2 capitalize">{data && data["Position"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="" className="text-xs  mt-2 capitalize">Location</Typography>
              <Typography variant="" className="text-xs  mt-2 capitalize">{data && data["Location"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="" className="text-xs  mt-2 capitalize">Gender</Typography>
              <Typography variant="" className="text-xs  mt-2 capitalize">{data && data["Gender"]}</Typography>

          </div>
          <div className="flex space-x-5 justify-between">
              <Typography variant="" className="text-xs  mt-2 capitalize">Joining dat</Typography>
              <Typography variant="" className="text-xs  mt-2 capitalize">{data && date }</Typography>

          </div>

        </div>
              </div>
            </div>
           
          </div>
          
          
        </CardBody>
      </Card>
      <div className="my-8">

      {/* //Card for the skils array    */}
      <Card className="mx-3 lg:-mt-24 mb-6 lg:mx-4 capitalize">
      <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6 capitalize"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="capitalize">
                Skills
              </Typography>
             
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6 capitalize"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem><Link to="/dashboard/skills">Update Skills</Link></MenuItem>

                <MenuItem><Link to="/dashboard/skills">Add more skills</Link></MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>

          <CardBody className="overflow-x-scroll px-0 pt-0">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Skill", "Domain", "Year of experience", "level"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b  border-blue-gray-50 py-3 px-6 text-center capitalize"
                      >
                        <Typography
                          variant="paragraph"
                          className="text-xs  uppercase text-black "
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {data["Skills"] && data["Skills"].map((ele,key)=>{
                  const className = `py-3 px-5 ${
                    key === data["Skills"].length - 1
                      ? ""
                      : ""
                  }`;
                  let c=0;
                  if(ele.level=="Beginner")
                    c=25
                  else if(ele.level=='Intermediate')
                    c=60
                  else
                    c=100
                  return (
                    <tr key={ele.skill_id}>
                      <td className={className}>
                        <div className="flex items-center gap-4 capitalize">
                          
                          <Typography
                            variant="small"
                            
                            className="text-xs  text-center font-medium text-black capitalize"
                          >
                            Neha
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                      <Typography
                            variant="small"
                           
                            className="text-xs  text-center font-medium text-black capitalize"
                          >
                            Neha
                          </Typography>
                        
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs  text-center font-medium text-black capitalize"
                        >
                          {ele.YOE}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs  font-medium text-black capitalize"
                          >
                            {ele.level}%
                          </Typography>
                          <Progress
                            value={c}
                            variant="gradient"
                            color={c === 100 ? "green" : c===60?"blue":"red"}
                            className="h-1 capitalize"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
               
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
    </div>
  );
}

export default Profile;
