
import { useState } from "react";
const Details=({signup,setSignup})=>{
    const [about,setabout]=useState(signup['about'])
    const [highlight,sethighlight]=useState(signup['highlight'])
    const [github,setgithub]=useState(signup['github'])
    const [linkedIn,setlinkedIn]=useState(signup['linkedIn'])
    const [portfolio,setportfolio]=useState(signup['portfolio'])
    // console.log("xcvbnkl")
    const handleChange=(val,s)=>{
        // console.log("val")
        // console.log(e.target.value,s)
        const delt=signup
        if(s==='about')
        {
            delt['about']=val

            setabout(val)
        }

        if(s==='github')
        {
            delt['github']=val

            setgithub(val)
        }
        if(s==='highlight')
        {
            delt['highlight']=val

            sethighlight(val)
        }
        if(s==='linkedIn')
        {
            delt['linkedIn']=val

            setlinkedIn(val)
        }
        if(s==='portfolio')
        {
            delt['portfolio']=val
            setportfolio(val)
        }
        setSignup(delt)
        // console.log("",detail)
    }   
   return( <div>
     <div className="mb-5 md:mb-6">
        <textarea  id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder="About"
        value={about} onChange={e=>(handleChange(e.target.value,"about"))} required/>

    </div>
    <div className="mb-5 md:mb-6">
        <textarea  id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder="Add highlight"
        value={highlight} onChange={e=>(handleChange(e.target.value,"highlight"))} required/>

    </div>
    <div className="mb-5 md:mb-6">
        <input type="text" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder="Add portfolio(optional)"
        value={portfolio} onChange={e=>(handleChange(e.target.value,"portfolio"))} required/>

    </div>
    <div className="mb-5 md:mb-6">
        <input type="text" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder="Add github url(optional)"
        value={github} onChange={e=>(handleChange(e.target.value,"github"))} required/>

    </div>
    <div className="mb-5 md:mb-6">
        <input type="text" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500 capitalize" placeholder="Add linkedIn(optional)"
        value={linkedIn} onChange={e=>(handleChange(e.target.value,"linkedIn"))} required/>

    </div>


   </div>
    );
}

export default Details;