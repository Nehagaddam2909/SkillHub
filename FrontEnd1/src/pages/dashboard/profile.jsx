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
} from "@heroicons/react/24/solid";
import { Link,useNavigate } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import axios from "axios";






export function Profile() {
  const [cookies, setCookie] = useCookies();
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
      console.log(d.data)
     }).catch(err=>{
      history("/auth/sign-in")
      // console.log("dfghj",err)
      
     })
  }
  fetchData()
  },[])
  return (
    <div>
      <div 
      className=
      "relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
       </div>
       <div className="flex flex-col lg:flex-row">
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Richard Davis
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  CEO / Co-Founder
                </Typography>
              </div>
            </div>
           
          </div>
          <div className="flex flex-col ">
            <div className="w-full  flex space-x-5 justify-center ">
              <Typography variant="paragraph">First Name</Typography>
              <Typography variant="paragraph">Neha</Typography>

          </div>
          <div className="flex space-x-5 justify-center ">
              <Typography variant="paragraph">First Name</Typography>
              <Typography variant="paragraph">Neha</Typography>

          </div>
          <div className="flex space-x-5 justify-center ">
              <Typography variant="paragraph">First Name</Typography>
              <Typography variant="paragraph">Neha</Typography>

          </div>
          <div className="flex space-x-5 justify-center ">
              <Typography variant="paragraph">First Name</Typography>
              <Typography variant="paragraph">Neha</Typography>

          </div>
          <div className="flex space-x-5 justify-center ">
              <Typography variant="paragraph">First Name</Typography>
              <Typography variant="paragraph">Neha</Typography>

          </div>
          <div className="flex space-x-5 justify-center ">
              <Typography variant="paragraph">First Name</Typography>
              <Typography variant="paragraph">Neha</Typography>

          </div>
          <div className="flex space-x-5 justify-center ">
              <Typography variant="paragraph">First Name</Typography>
              <Typography variant="paragraph">Neha</Typography>

          </div>

        </div>

          
        </CardBody>
      </Card>
      <div className="my-8">
      <Card className="mx-3 lg:-mt-24 mb-6 lg:mx-4 ">
      <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Projects
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
                <strong>30 done</strong> this month
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>

          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["companies", "members", "budget", "completion"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          Neha
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
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
