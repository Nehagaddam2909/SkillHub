import { platformSettingsData } from "@/data"
import axios from "axios"
export const handleSkill=async(e,slct_skill,select_v,changeOverlay,toggleOverlay,setData,setDomainData)=>{
   
    await axios.post("http://localhost:4000/addSkill",
    {
      skill:slct_skill,
      domain:select_v
    },
    {  
    withCredentials:true } // could also try 'same-origin'
  
    ).then(d=>{
      const jss =  d.data

      if(jss.Success)
      { 
        const dd=data
        dd[select_v].push({
          skill_name:skill,
          domain:select_v
        })
        setData(dd)
        setDomainData(dd[domain])
        window.location.reload();
        changeOverlay(false)
        toggleOverlay(false)
      window.location.reload()

        

      }
      else{
        console.log("success false:",jss)
      
      }
  
    }).catch(err=>{
      changeOverlay(false)
      toggleOverlay(false)
      console.log(err)
     
      
     
    })
  
  }