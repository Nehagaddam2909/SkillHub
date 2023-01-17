import { useState } from "react"
const AddSkills=({slct_skill,select_v,setSkill,changeSelectV,setData,domain_data,toggleOverlay,changeOverlay,handleSkill,setDomainData,data})=>{
  const [other,setOther]=useState("")  
  return(
        <div className= "bg-white z-10 absolute top-[20rem] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl px-8 py-5">
        <div className="text-xl border-b-2 border-gray-700 pb-2 mb-3">Add Skill</div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-0">
            <label htmlFor="skill">Skill <small className="text-red-900 absolute ml-1 ">*</small> </label>
            <input type="text" value={slct_skill} name="skill" id="skill" className="border-b-2 border-blue-300  px-2 py-1 outline-none" onChange={e=>setSkill(e.target.value)}/>
          </div>
          <div className="flex flex-col gap-2">
         
            <label htmlFor="domain">Domain <small className="text-red-900 absolute ml-1 ">*</small></label>
            <select className=" px-3 py-1 outline-none bg-white border border-blue-500 " name="" id="" value={select_v} onChange={e=>(changeSelectV(e.target.value))}>
            <option value={"Other"}>Other</option>
              
              {
                domain_data && domain_data.map((ele,idx)=>{
                  return <option key={idx} value={ele}>{ele}</option>
                })
              }
              {/* {console.log(select_v)} */}
             
            </select>
            <div className={`flex flex-col gap-0 ${select_v==="Other"?"visible":"hidden"}`}>
               <label htmlFor="skill">Domain Name <small className="text-red-900 absolute ml-1 ">*</small> </label>
              <input type="text" value={other} name="skill" id="skill" className={`border-b-2 border-blue-300  px-2 py-1 outline-none`} onChange={e=>setOther(e.target.value)}/>
              </div>

          </div>
          
          <div className="flex justify-end gap-2 pb-3">
            <button onClick={e=>{
              toggleOverlay(false)
              changeOverlay(false)
            }}  color="red" className="text-lg text-white bg-red-500 rounded px-3 py-1 font-normal capitalize" >Cancel</button>
            <button  className="text-lg text-white bg-green-500 rounded px-3 py-1  font-normal capitalize" 
            onClick={e=>handleSkill(e,slct_skill,select_v,changeOverlay,toggleOverlay,setData,setDomainData,data,other)}
            >Add</button>
          </div>
          </div>
      <hr />
      </div>
    )
}

export default AddSkills;