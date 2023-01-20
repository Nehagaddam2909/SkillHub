
const Filters=({gender,position,location,department,filter_gender,filter_department,filter_location,filter_position,setGenderF,setPositionF,setDepartmentF,setLocationF,handleChange})=>{
    return(  <div className='flex flex-center my-4 text-black space-x-4 overflow-x-scroll'>
    {/* <form  className='flex space-x-4 text-black'> */}

      <label className="mt-[.2rem] text-[1rem] font-serif mr-1" for="slct">
        Gender:</label>
        <select id="slct" className='-mt-[.4px] block text-[1rem] font-serif bg-white border border-grey-300 focus:outline-blue-500' value={filter_gender} onChange={(event) => setGenderF(event.target.value)}>
          <option value="All">All</option>
          
          {gender.map((e)=>(
               <option value={e} key={e}>{e}</option>
          ))}
        </select>
      

      <label className="mt-[.2rem] text-[1rem] font-serif mr-1" for="slct2">
        Location:</label>
        <select id="slct2" className='-mt-[.4px] block text-[1rem] font-serif bg-white border border-grey-300 focus:outline-blue-500' value={filter_location} onChange={(event) => setLocationF(event.target.value)}>
          <option value="All">All</option>
          {location.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      

      <label className='mt-[.2rem] text-[1rem] font-serif mr-1' id="slct4">
        Department:</label>
        <select id="slct4" className='-mt-[.4px]  block text-[1rem] font-serif bg-white border border-grey-300 focus:outline-blue-500' value={filter_department} onChange={(event) => setDepartmentF(event.target.value)}>
          <option value="All">All</option>
          {department.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      

      <label className='mt-[.2rem] text-[1rem] font-serif mr-1' for="slct3">
        Position:</label>
        <select className='-mt-[.4px] block text-[1rem] font-serif bg-white border border-grey-300 focus:outline-blue-500' value={filter_position} onChange={(event)=>setPositionF(event.target.value)} id="slct3">
            <option value="All">All</option>
            {position.map((position)=>(
                <option key={position} value={position}>{position}</option>
            ))}

        </select>
        
        <input value="Filter" className='border border-blue-500 font-serif text-[1rem] px-1' type="submit" onClick={e=>handleChange(e)}/>
       
        
    </div>)
}
export default Filters;