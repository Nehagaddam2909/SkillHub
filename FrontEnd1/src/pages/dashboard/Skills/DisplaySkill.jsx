const DisplaySkill=({ele,idx,domain,handleToggle,dom,setData,setchunks,chunks,data})=>{
    return (<div key={idx} id={ele._id+`flex`} className ={`flex flex-wrap mb-3 justify-center items-center  shadow-md rounded-xl w-[10rem] h-[7.5rem] flex-col ${ele.checked?"bg-blue-600 text-white":"bg-white text-blue-600"} ${domain!==dom?"hidden":""}` } >

    <input name={ele._id}  type="checkbox" id={ele._id+'checkbox'}  className="hidden" onChange={e=>handleToggle(ele._id,idx,dom,setData,setchunks,chunks,data,domain)}></input>
    <label htmlFor={ele._id+'checkbox'} className="text-xl" >{ele.skill_name}</label>
    <div className={` grid-cols-1 md:grid-cols-1  text-white ${ele.checked?"":"hidden"}`} id={ele._id+`grid`}>
      <select id={ele._id+'select'} onChange={e=>handleToggle(ele._id,idx,dom,setData,setchunks,chunks,data,domain)} className="py-1 bg-transparent mb-2 mx-3 lg:mb-0 rounded-lg focus:outline-blue-600" value={`${ele.checked?ele.level:'Beginner'}`}>
        <option className="text-black">Beginner</option>
        <option className="text-black">Intermediate</option>
        <option className="text-black">Expert</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-3 justify-center items-center">
        <label htmlFor="exp" className="hidden md:block">Exp: </label>
      <input onChange={e=>handleToggle(ele._id,idx,dom,setData,setchunks,chunks,data,domain)} id={ele._id+'number'}  
      type="number" className="-mt-1py-1 w-full px-2 bg-transparent rounded-lg focus:outline-blue-600" placeholder="Year of experience" name="exp"
      value={`${ele.checked?ele.YOE:0}`}
      
      ></input>

    </div>

  </div>
    </div>)
}

export default DisplaySkill