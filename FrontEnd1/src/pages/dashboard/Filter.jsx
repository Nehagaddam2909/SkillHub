import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ShowEmp from './ShowEmpFilter';
import ShowEmpFilter from './ShowEmpFilter';

export function Filter() {
    const [filter_gender, setGender_filter] = useState('All');
    const [filter_location, setLocation_filter] = useState('All');
    const [filter_department, setDepartment_filter] = useState('All');
    const [filter_position, setPosition_filter] = useState('All');
    
    const [employees, setEmployees] = useState([]);
    const [locs, setLocations] = useState([]);
    const [depts, setDepartments] = useState([]);
    const [pos, setPositions] = useState([]);

    const [Employee,setEmp]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // this will set the all unique vale for Location,Position,Dapartment etc from backend available data dynamically
    useEffect(() => {
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

    }, []);

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
    };


    if (isLoading) {
        return <p>Loading...</p>;
    }
    
    if (error) {
    return <p>An error occurred: {error.message}</p>;
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Gender:
        <select value={filter_gender} onChange={(event) => setGender_filter(event.target.value)}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Location:
        <select value={filter_location} onChange={(event) => setLocation_filter(event.target.value)}>
          <option value="All">All</option>
          {locs.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Department:
        <select value={filter_department} onChange={(event) => setDepartment_filter(event.target.value)}>
          <option value="All">All</option>
          {depts.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Position:
        <select value={filter_position} onChange={(event)=>setPosition_filter(event.target.value)}>
            <option value="All">All</option>
            {pos.map((position)=>(
                <option key={position} value={position}>{position}</option>
            ))}

        </select>
        </label>
         <br />
        <button style={{backgroundColor:"blue",color:"red"}} type="submit">Filter</button>
        </form>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Location</th>
          <th>Position</th>
          <th>Department</th>
        </tr>
      </thead>
    {
        employees.map((val)=>{
            return(
                <tbody>
                
                <ShowEmpFilter key={val._id} _id={val._id} fname={val.FirstName} lname={val.LastName} dept={val.Department} sex={val.Gender} pos={val.Position} loc={val.Location}/>
                </tbody>
            )
        })
    }
    </table>
      
        
    </div>
  )
}
