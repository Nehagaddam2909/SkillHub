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
import ReactDOM from "react-dom";
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
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";


export function Tables({toggleOverlay}) {

  const navigate = useNavigate();

const columns = [
    
  {
    name: "Name",
    
    selector: (row) =>row.FirstName,
    cellExport: row => row.FirstName,
    sortable: true,
  },
  {
    name: "Position",
    selector: (row) => row.Position   ,
    cellExport: row => row.Position,
    sortable: true
  },
  {
    name: 
    "Department",
    selector: (row) =>row.Department ,
    cellExport: row => row.Department,
    sortable: true
  },
  {
    name:  "Gender",
    selector: (row) => row.Gender,
    cellExport: row => row.Gender,
    sortable: true
  },
  {
    name: "Location",
    selector: (row) =>row.Location,
    cellExport: row => row.Location,
    sortable: true
  },
  {
    name: "Employeed",
    selector: (row) => row.JoinDate,
    cellExport: row => row.JoinDate,
    sortable: true
  },
   {
    name:"Action",
    selector:(row)=><button onClick={e=>handleClick(e,row)} className="font-serif text-[1rem] md:text-base text-center capitalize">View</button>,
    cellExport: row => "",
  }   
  
];
const handleClick=(e,row)=>{

  navigate('/dashboard/profile', { state: row });
}
  const [keys,setKeys]=useState([])
  const [toggle,changeToggle]=useState(false)
  const [id,setId]=useState("")
  const [cookies,setCookie]=useCookies()
  const [data,setData]=useState(
[]  )

// // -------------------------------------------
//   // other component(Table.jsx), we can access the state variable by using the useLocation hook from the react-router-dom library and accessing the state property of the location object it returns.
//   const location = useLocation();
  // const stateVariable_imported = location.state;
  const {state} = useLocation();
  const stateVariable_imported = state;
  // console.log("imported state var:::::::-->using useLocation():",state)
  
  // set the data-->imported from other components
  // setData(stateVariable_imported)-->these will cause an infinite-loop-->to prevent these we will update it inside the useEffect()-->as below
  useEffect(() => {
    console.log(state)
    if(state)
    {
      setData(stateVariable_imported)
       
    }
    else
    {
      setData(data)
      setTableData({columns,data})
    }
    // console.log("imported state var:::::::__________---------:",stateVariable_imported)
  }, [stateVariable_imported]); // only update the state variable if location.state changes
// -------------------------------------------



  
  const handleToggle=(e,id)=>{
    // console.log(id)
    const ele=document.getElementById(id+"h")
    ele.classList.remove("hidden")
   
  }

  
  const [tabledata,setTableData]=useState({columns,data})

// console.log("",tabledata)
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
            noHeader
            customStyles={tableCustomStyles}
            // style="backgrund-color:red !important;"
          />
          {/* </DataTableExtensions>} */}
      </CardBody>

    </Card>

      
    </div>
  );
}

export default Tables;
