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
// import FilterSelection from "./FilterSelection";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";


export function Tables({toggleOverlay}) {

const navigate = useNavigate();
const [filter_gender, setGenderF] = useState('All');
const [filter_location, setLocationF] = useState('All');
const [filter_department, setDepartmentF] = useState('All');
const [filter_position, setPositionF] = useState('All');
const [gender,setGender]=useState([])
const [department,setDepartment]=useState([])
const [location,setLocation]=useState([])
const [position,setPosition]=useState([])


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
  const [data,setData]=useState([]  )
  


useEffect(()=>{
   async function fetchData(){
      await axios.post("http://localhost:4000/getEmployee",{
        gender:filter_gender,
        location:filter_location,
        department:filter_department,
        position:filter_position,
      }).
      then(async(d)=>{
        const dd=await d.data
        setData(dd.data)
        // console.log(dd)
        let loc=[]
        let pos=[],dep=[],gen=[];
        dd.data.map((a,i)=>
        {
          if(!loc.includes(a.Location))
            loc.push(a.Location)
          if(!pos.includes(a.Position))
            pos.push(a.Position)
          if(!gen.includes(a.Gender))
            gen.push(a.Gender)
          if(!dep.includes(a.Department))
            dep.push(a.Department)
        })
      
      }).catch(ee=>{
        console.log(ee)
      })
  }
  fetchData()
},[])



  
  const [tabledata,setTableData]=useState({columns,data})

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
        {/* <h3>----------here the filter is---------------</h3> */}
          <DataTable
            
            columns={columns}
            data={data}
            pagination
            
            defaultSortFieldId
            highlightOnHover
            noHeader
            customStyles={tableCustomStyles}
          />
          {/* </DataTableExtensions>} */}
      </CardBody>

    </Card>

      
    </div>
  );
}

export default Tables;
