import React, { useState, useEffect } from 'react';
// import { navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import {Link,useLocation} from 'react-router-dom'
import './filterForm.css'

import axios from 'axios';
export default function FilterSelection() {

    const [filter_gender, setGender_filter] = useState('All');
    const [filter_location, setLocation_filter] = useState('All');
    const [filter_department, setDepartment_filter] = useState('All');
    const [filter_position, setPosition_filter] = useState('All');
    
    const [employees, setEmployees] = useState([]);
    const [locs, setLocations] = useState([]);
    const [depts, setDepartments] = useState([]);
    const [pos, setPositions] = useState([]);
    
    const [isEmp,setIsEmp]=useState(false)
    const [Employee,setEmp]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const [data,setData]=useState(
        [    {"_id":"63b713e7ba4fb439c79d9678","FirstName":"loc","LastName":"dob","Gender":"Female","JoinDate":"2003-09-29T00:00:00.000Z","Location":"pune ","Department":"sales","Position":"sales person","Email":"loc@gmail.com","Password":"$2b$10$TRV7076kpx3.N0rWAXYm4.7WJrNKzAyEbOcGK9D6RvOzCSgDDvOqu","Skills":[],"__v":0},
            {"_id":"63b715ee2d2fd1cc52f9001c","FirstName":"vbn","LastName":"sdf","Gender":"Female","JoinDate":"2013-12-31T00:00:00.000Z","Location":"sdfg","Department":"sdfgn","Position":"xcvb","Email":"vbn@gmail.com","Password":"$2b$10$02bQWAoK/aLHE9ZzKc/vfuoZz3K2IXaN6796VsNdgls4JeaLY72Lm","Skills":[{"skill_id":"63af1e42157be2cd2d498984","level":"Beginner","YOE":2,"_id":"63b71b0aca22d6993db9550c"},{"skill_id":"63b3a57939ac8dece5f96ada","level":"Intermediate","YOE":2,"_id":"63b71b40ca22d6993db9551f"}],"__v":0,"about":"I am enthusicatic learner","highlight":"Have experience of sales more than 8 yeaens","github":"http://my-github.com","linkedIn":"http://my-linked.com","portfolio":"http://my-portforlio.com"},{"_id":"63b716732d2fd1cc52f9001e","FirstName":"sdjs","LastName":"mnzd","Gender":"female","JoinDate":"0201-02-23T00:00:00.000Z","Location":"md","Department":"mdnm","Position":"md","Email":"hj@gmail.co","Password":"$2b$10$mu6gSb8SBVUIbsxwCfH8peslcEOaivW96fXCCTR9800u2asqsL.LC","about":"dasdjjfsdmn","highlight":"nzbczbxcnzxbczxb","Skills":[],"__v":0},{"_id":"63b716ce000b60bc71d4bfa6","FirstName":"Nehal","LastName":"Ughade","Gender":"Female","JoinDate":"2002-08-07T00:00:00.000Z","Location":"Mumbai","Department":"Technical","Position":"SDE","Email":"nehalughade1221@gmail.com","Password":"$2b$10$RhVzGL3/YR8zNNAEE9blp.0oN1zsV/QyPX6wKIgZhFJNinE5HyiIG","Skills":[{"skill_id":"63af1e42157be2cd2d498986","level":"Beginner","YOE":5,"_id":"63b7cbe2f8927bae8321aee5"},{"skill_id":"63b7ca29f8927bae8321ae91","level":"Expert","YOE":0,"_id":"63b7cbe2f8927bae8321aee6"}],"__v":0},{"_id":"63b7197e000b60bc71d4c02e","FirstName":"wew","LastName":"aa","Gender":"female","JoinDate":"0201-12-12T00:00:00.000Z","Location":"sds","Department":"SA","Position":"ds","Email":"wewe@gm.co","Password":"$2b$10$59RWnbVYBcmzIF8eNb/H3.SnpKFEyqgckhtgUmwR6sgpZqkbMhN0y","about":"dmfds","highlight":"mncmn","portfolio":"mcxn","github":"xvmxmvc","Skills":[],"__v":0},{"_id":"63b71a16ca22d6993db954bc","FirstName":"adsa","LastName":"asdasd","Gender":"Female","JoinDate":"2012-12-12T00:00:00.000Z","Location":"asdsad","Department":"sczx","Position":"asdsad","Email":"sadsand@ndj.com","Password":"$2b$10$wExXBi9utUDBYN2x5QR7.uAHfuFYs8dh2zuO1ZNZbpBKNZ7b2qa4u","Skills":[],"__v":0}]
          )

        // this will set the all unique vale for Location,Position,Dapartment etc from backend available data dynamically
    useEffect(() => {
        console.log("lennnnnnnnn of Employee state var:",Employee.length)
        if(Employee.length===0)
        {
            console.log("inside to be fetched!!!!!!!!!!!!")
                    // Fetch the unique values for the filters
        const fetchData =async () => {
            try {
            const response = await axios.get("http://localhost:4000/getEmployee", {
                headers: { "Content-type": "application/json" }
            });
        
            const Alldata = response.data;
            console.log("mydata:", Alldata);
            console.log("mydata's employees:", Alldata.data);
            setEmp(Alldata.data)
    
            } catch (error) {
            setError(error);
            } finally {
            setIsLoading(false);
            }
        };
        fetchData();
            
    //   getting unique values for to apply filters of location ,Position like that
            const uniqueLocations = Employee.reduce((acc, obj) => {
            if (!acc.includes(obj.Location)) {
                acc.push(obj.Location);
            }
            return acc;
            }, []);
    
            const uniquePositions = Employee.reduce((acc, obj) => {
            if (!acc.includes(obj.Position)) {
                acc.push(obj.Position);
            }
            return acc;
            }, []);
    
            const uniqueDepartment = Employee.reduce((acc, obj) => {
            if (!acc.includes(obj.Department)) {
                acc.push(obj.Department);
            }
            return acc;
            }, []);
            //   setting stte variables
            setPositions(uniquePositions);
            setDepartments(uniqueDepartment);
            setLocations(uniqueLocations)
            
            console.log("my unique values:",locs,depts,pos); // ['a', 'b']
        }
        else
        {
            //   getting unique values for to apply filters of location ,Position like that
            const uniqueLocations = Employee.reduce((acc, obj) => {
            if (!acc.includes(obj.Location)) {
                acc.push(obj.Location);
            }
            return acc;
            }, []);
    
            const uniquePositions = Employee.reduce((acc, obj) => {
            if (!acc.includes(obj.Position)) {
                acc.push(obj.Position);
            }
            return acc;
            }, []);
    
            const uniqueDepartment = Employee.reduce((acc, obj) => {
            if (!acc.includes(obj.Department)) {
                acc.push(obj.Department);
            }
            return acc;
            }, []);
        //   setting stte variables
            setPositions(uniquePositions);
            setDepartments(uniqueDepartment);
            setLocations(uniqueLocations)
            
            
            console.log("in elses block-->my unique values:",locs,depts,pos); // ['a', 'b']
        }
    
        }, [Employee]);

    //   handlesubmit to apply respective filters
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("selected values are:",filter_gender,filter_location,filter_department,filter_position)
    
        // Send the GET request to the backend API
        const config = {
            method: 'get',
            url: 'http://localhost:4000/applyFilter',
            headers: { 'Content-Type': 'application/json' },
            params: {
                filter_gender,
                filter_location,
                filter_department,
                filter_position,
            },
          };
          // in above url lokks like->url:`http://localhost:4000/applyFilter/skills?filter_gender=${filter_gender}&filter_location=${filter_location}`
          
          const response = await axios(config);
    
    
        // Update the employees state with the response data
        setEmployees(response.data);
        console.log("filter len:",employees.length)
        console.log("filter emp:",employees)

        // Send the state variable to the other component(Table.jsx from current component(FilterSelection.jsx))
        // navigate('/dashboard/Filter',{state:employees})
        // myObject !== null && typeof myObject !== 'undefined'
        navigate('/dashboard/tables', { state:(employees!==null && employees!=='undefined')?employees: data});
      };

    const styling={

        top: "13px",
        padding: "4px",
        margin: "16px",
        color:'black',
        
      }
  return (
    <div>
    <form onSubmit={handleSubmit}  className="slectionMenu" style={styling}>

      <label className='label_' style={{paddingLeft:"22px" ,top:'0px'}}>
        Gender:
        <select className='select_' value={filter_gender} onChange={(event) => setGender_filter(event.target.value)}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <br />

      <label className='label_' style={{paddingLeft:"22px"}}>
        Location:
        <select className='select_' value={filter_location} onChange={(event) => setLocation_filter(event.target.value)}>
          <option value="All">All</option>
          {locs.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label className='label_' style={{paddingLeft:"22px"}}>
        Department:
        <select className='select_' value={filter_department} onChange={(event) => setDepartment_filter(event.target.value)}>
          <option value="All">All</option>
          {depts.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label className='label_' style={{paddingLeft:"22px"}}>
        Position:
        <select className='select_' value={filter_position} onChange={(event)=>setPosition_filter(event.target.value)}>
            <option value="All">All</option>
            {pos.map((position)=>(
                <option key={position} value={position}>{position}</option>
            ))}

        </select>
        </label>
         <br />

        <button className='button_' title="Filter results" style={styling} type="submit">Filter</button>
    </form>
    </div>
  )
}
