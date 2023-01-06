
import { useState } from "react";
const Details=({detail,setdetail})=>{
    const [about,setabout]=useState(detail['about'])
    const [highlight,sethighlight]=useState(detail['highlight'])
    const [github,setgithub]=useState(detail['github'])
    const [linkedIn,setlinkedIn]=useState(detail['linkedIn'])
    const [portfolio,setportfolio]=useState(detail['portfolio'])
    const handleChange=(e,s)=>{
        // console.log(e,s)
        if(s==='about')
        {
            setabout(e.target.value)
            detail['about']=about
        }

        if(s==='github')
        {
            setgithub(e.target.value)
            detail['github']=github
        }
        if(s==='highlight')
        {
            sethighlight(e.target.value)
            detail['highlight']=highlight
        }
        if(s==='linkedIn')
        {
            setlinkedIn(e.target.value)
            detail['linkedIn']=linkedIn
        }
        if(s==='portfolio')
        {
            setportfolio(e.target.value)
            detail['portfolio']=portfolio
        }
        setdetail(detail)
        // console.log(detail)
    }   
   return( <div>
     <div className="mb-5 md:mb-6">
        <textarea  id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="About"
        value={about} onChange={e=>(handleChange(e,"about"))} required/>

    </div>
    <div className="mb-5 md:mb-6">
        <textarea  id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Add highlight"
        value={highlight} onChange={e=>(handleChange(e,"highlight"))} required/>

    </div>
    <div className="mb-5 md:mb-6">
        <input type="text" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Add portfolio(optional)"
        value={portfolio} onChange={e=>(handleChange(e,"portfolio"))} required/>

    </div>
    <div className="mb-5 md:mb-6">
        <input type="text" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Add github url(optional)"
        value={github} onChange={e=>(handleChange(e,"github"))} required/>

    </div>
    <div className="mb-5 md:mb-6">
        <input type="text" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Add linkedIn(optional)"
        value={linkedIn} onChange={e=>(handleChange(e,"linkedIn"))} required/>

    </div>


   </div>
    );
}

export default Details;