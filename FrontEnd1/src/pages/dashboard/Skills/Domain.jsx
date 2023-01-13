import {CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Domain=({ele,domain,idx,data,handleCheck,setdomain,setSkills})=>{
return(
    <div key={idx} className={`flex items-center justify-center shadow-lg rounded-xl h-16 w-[12rem] mb-2 text-blue-600  border-2 border-purple-500 ${domain===ele?"bg-white":" bg-gray-100"}`}>

    <CheckBadgeIcon className= {`w-5 h-5 text-inherit ${domain!==ele?"hidden":""}`}></CheckBadgeIcon>


     
     <input type="radio" name={ele} id={ele} checked={domain==ele} onChange={e=> handleCheck(e,setSkills,setdomain,data)}  className="hidden" ></input>
     <label htmlFor={ele} className="text-center	text-xl">{ele}</label>
   </div>
)
}
export default Domain;