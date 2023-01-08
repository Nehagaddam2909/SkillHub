import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button
} from "@material-tailwind/react";
import './Pop.css';
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import Pop from "./Pop";
import React, { useState,useEffect } from 'react';
import { useCookies } from "react-cookie";
import axios from "axios";
import DataTable, { createTheme  } from "react-data-table-component";
import { tableCustomStyles } from "./tableCustomStyle";
import { Link,useNavigate,useLocation } from "react-router-dom";
import FilterSelection from "./FilterSelection";


export function Tables({toggleOverlay}) {
  const [keys,setKeys]=useState([])
  const [toggle,changeToggle]=useState(false)
  const [id,setId]=useState("")
  const navigate = useNavigate();
  const [cookies,setCookie]=useCookies()
  const [data,setData]=useState(
[    {"_id":"63b713e7ba4fb439c79d9678","FirstName":"loc","LastName":"dob","Gender":"Female","JoinDate":"2003-09-29T00:00:00.000Z","Location":"pune ","Department":"sales","Position":"sales person","Email":"loc@gmail.com","Password":"$2b$10$TRV7076kpx3.N0rWAXYm4.7WJrNKzAyEbOcGK9D6RvOzCSgDDvOqu","Skills":[],"__v":0},
    {"_id":"63b715ee2d2fd1cc52f9001c","FirstName":"vbn","LastName":"sdf","Gender":"Female","JoinDate":"2013-12-31T00:00:00.000Z","Location":"sdfg","Department":"sdfgn","Position":"xcvb","Email":"vbn@gmail.com","Password":"$2b$10$02bQWAoK/aLHE9ZzKc/vfuoZz3K2IXaN6796VsNdgls4JeaLY72Lm","Skills":[{"skill_id":"63af1e42157be2cd2d498984","level":"Beginner","YOE":2,"_id":"63b71b0aca22d6993db9550c"},{"skill_id":"63b3a57939ac8dece5f96ada","level":"Intermediate","YOE":2,"_id":"63b71b40ca22d6993db9551f"}],"__v":0,"about":"I am enthusicatic learner","highlight":"Have experience of sales more than 8 yeaens","github":"http://my-github.com","linkedIn":"http://my-linked.com","portfolio":"http://my-portforlio.com"},{"_id":"63b716732d2fd1cc52f9001e","FirstName":"sdjs","LastName":"mnzd","Gender":"female","JoinDate":"0201-02-23T00:00:00.000Z","Location":"md","Department":"mdnm","Position":"md","Email":"hj@gmail.co","Password":"$2b$10$mu6gSb8SBVUIbsxwCfH8peslcEOaivW96fXCCTR9800u2asqsL.LC","about":"dasdjjfsdmn","highlight":"nzbczbxcnzxbczxb","Skills":[],"__v":0},{"_id":"63b716ce000b60bc71d4bfa6","FirstName":"Nehal","LastName":"Ughade","Gender":"Female","JoinDate":"2002-08-07T00:00:00.000Z","Location":"Mumbai","Department":"Technical","Position":"SDE","Email":"nehalughade1221@gmail.com","Password":"$2b$10$RhVzGL3/YR8zNNAEE9blp.0oN1zsV/QyPX6wKIgZhFJNinE5HyiIG","Skills":[{"skill_id":"63af1e42157be2cd2d498986","level":"Beginner","YOE":5,"_id":"63b7cbe2f8927bae8321aee5"},{"skill_id":"63b7ca29f8927bae8321ae91","level":"Expert","YOE":0,"_id":"63b7cbe2f8927bae8321aee6"}],"__v":0},{"_id":"63b7197e000b60bc71d4c02e","FirstName":"wew","LastName":"aa","Gender":"female","JoinDate":"0201-12-12T00:00:00.000Z","Location":"sds","Department":"SA","Position":"ds","Email":"wewe@gm.co","Password":"$2b$10$59RWnbVYBcmzIF8eNb/H3.SnpKFEyqgckhtgUmwR6sgpZqkbMhN0y","about":"dmfds","highlight":"mncmn","portfolio":"mcxn","github":"xvmxmvc","Skills":[],"__v":0},{"_id":"63b71a16ca22d6993db954bc","FirstName":"adsa","LastName":"asdasd","Gender":"Female","JoinDate":"2012-12-12T00:00:00.000Z","Location":"asdsad","Department":"sczx","Position":"asdsad","Email":"sadsand@ndj.com","Password":"$2b$10$wExXBi9utUDBYN2x5QR7.uAHfuFYs8dh2zuO1ZNZbpBKNZ7b2qa4u","Skills":[],"__v":0}]
  )

// // -------------------------------------------
//   // other component(Table.jsx), we can access the state variable by using the useLocation hook from the react-router-dom library and accessing the state property of the location object it returns.
//   const location = useLocation();
  // const stateVariable_imported = location.state;
  const {state} = useLocation();
  const stateVariable_imported = state;
  console.log("imported state var:::::::-->using useLocation():",state)

  // set the data-->imported from other components
  // setData(stateVariable_imported)-->these will cause an infinite-loop-->to prevent these we will update it inside the useEffect()-->as below
  useEffect(() => {
    if(state!==null && state!=='undefined')
    {
      setData(stateVariable_imported)
    }
    else
    {
      setData(data)
    }
    console.log("imported state var:::::::__________---------:",stateVariable_imported)
  }, [stateVariable_imported]); // only update the state variable if location.state changes
// -------------------------------------------



  const handleClick=(e,row)=>{

    navigate('/dashboard/profile', { state: row });
  }
  const handleToggle=(e,id)=>{
    console.log(id)
    const ele=document.getElementById(id+"h")
    ele.classList.remove("hidden")
   
  }

  const columns = [
    
    {
      name: "Name",
      
      selector: (row) =>row.FirstName,
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => row.Position   ,
      sortable: true
    },
    {
      name: 
      "Department",
      selector: (row) =>row.Department ,
      sortable: true
    },
    {
      name:  "Gender",
      selector: (row) => row.Gender,
      sortable: true
    },
    {
      name: "Location",
      selector: (row) =>row.Location,
      sortable: true
    },
    {
      name: "Employeed",
      selector: (row) => row.JoinDate,
      sortable: true
    },
     {
      name:"Action",
      selector:(row)=><button onClick={e=>handleClick(e,row)} className="font-serif text-[1rem] md:text-base text-center capitalize">View</button>
     }   
    
  ];
  

  return (
  <div>
    <Card className="mt-9">
          <CardHeader variant="gradient" color="blue" className="-mb-2 p-6">
            <Typography variant="h5" color="white" className="text-center">
              All Employees
            </Typography>
          </CardHeader>

      <CardBody className="text-xl">
        {/*-------------------- applying filter------------------ */}
        <FilterSelection/>
        {/* <h3>----------here the filter is---------------</h3> */}

          <DataTable
            
            columns={columns}
            data={data}
            pagination
            
            defaultSortFieldId
            highlightOnHover
        
            customStyles={tableCustomStyles}
            // style="backgrund-color:red !important;"
          />
      </CardBody>

    </Card>

      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              All Employees
            </Typography>
          </CardHeader>
          
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Name", "Function", "Gender","Location", "employed", ""].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[18px] font-bold uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>


              <tbody>
                
                {data && data.map((ele)=>{
                  console.log(ele)
                })}
                {authorsTableData.map(
                  ({ img, name, email, job, online, date }, key) => {
                    const className = `py-3 px-5 ${
                      key === authorsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                    < >

                      
                      
                        <tr key={name} className="popup" >
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <Avatar src={img} alt={name} size="sm" />
                              <div>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-semibold"
                                >
                                  {name}
                                </Typography>
                                <Typography className="text-base font-normal text-blue-gray-500">
                                  {email}
                                </Typography>
                              </div>
                            </div>
                          </td>
                          <td className={className}>
                            <Typography className="text-base font-semibold text-blue-gray-600">
                              {job[0]}
                            </Typography>
                            <Typography className="text-base font-normal text-blue-gray-500">
                              {job[1]}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Chip
                              variant="gradient"
                              color={online ? "green" : "blue-gray"}
                              value={online ? "online" : "offline"}
                              className="py-0.5 px-2 text-[11px] font-medium"
                            />
                          </td>
                          <td className={className}>
                            <Typography className="text-base font-semibold text-blue-gray-600">
                              {date}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              as="a"
                              href="#"
                              className="text-base font-semibold text-blue-gray-600"
                            >
                           
                            </Typography>

                            <button onClick={e=>handleToggle(e,name)}>View Details</button>

                            { toggle && 
                            <Pop id={id} changeToggle={changeToggle} toggleOverlay={toggleOverlay}></Pop>}
                          </td>
                        </tr>

                    </>
                    );
                  }     
                )}    
              </tbody>
            </table>
          </CardBody>
        </Card>
      
      </div>
    </div>
  );
}

export default Tables;
