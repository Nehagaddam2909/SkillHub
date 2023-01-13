import React from "react";
import axios from "axios";
import Domain from "./Skills/Domain";
import { fetchUserData,handleCheck } from "./Skills/fetchUserData";
import { handleSkill } from "./Skills/handleSkill";
import { handleToggle } from "./Skills/handleToggle";
import { Link,useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect,useState } from "react";
import { Typography, Alert, Card,CardHeader, CardBody, Button} from "@material-tailwind/react";
import {CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import DisplaySkill from "./Skills/DisplaySkill";
import AddSkills from "./Skills/AddSkills";
import EditSkill from "./Skills/EditSkill";
import { handleEditSkill } from "./Skills/handleEditSkill";
import EditToggle from "./Skills/EditToggle";
export function Skills({toggleOverlay}) {
  const [data,setData]=useState({});
  let history=useNavigate();
  const [domain_data,setDomainData]=useState([])
  const [skills,setSkills]=useState([])
  const [userdata,setUserdata]=useState([])
  const [domain, setdomain] = useState("")
  const [chunks, setchunks] = useState([])
  const [cookies, setCookie] = useCookies(); 
  const [alert,changAlert]=useState(false)
  const [text,changeColor]=useState("")
  const [overlay,changeOverlay]=useState(false) 
  const [slct_skill,setSkill]=useState("")
  const [select_v,changeSelectV]=useState("Technical")
  const [ModalName,changeModalName]=useState("Update")
  const [skill_to_edit, setskill_to_edit] = useState({})
  //Retriving the domain from the request
  useEffect(()=>{
    fetchUserData(cookies.jwt,setUserdata,setchunks,setData,setDomainData,setdomain);
 
  },[])
 //Handling the toggole selection of the domain
  
  
 
  

  const handleButton=async()=>{
    const token=cookies.jwt;
    if(chunks.length)
    {
      await axios.post(
        "http://localhost:4000/employee/addSkills",{
          skills:chunks,
          cookie:token,
        },
        {
          withCredentials:true
  
        }
  
        
      ).then( (d)=>{
          const jss=d.data
          if(!jss.Success)
          { 
            console.log("barabar chhe")
              changeColor(jss.message)
              changAlert(true)
              
          }
          else{
            console.log("Something went wrong")
            changAlert(false)
            // history("/")
          }
      }).catch(err=>{
          changeColor(err.message)
          changAlert(true)
      })
      

    }else{
      
      changeColor("Select any skill")
      changAlert(true)
      return ;

    }
    
  }
//handling the skill add


const arr =[];

const HandleDeleteSkill = (id) =>{
  const token=cookies.jwt;
  
  // axios call
  axios.post("http://localhost:4000/deleteSkill",
  {
    skill_id:id,
    token,
  }
  ).then(async (d)=>{
    const jss =  d.data
    if(jss.Success)
    { 
      // remove from chunks
      const arr = [...chunks]
      arr.filter((ele,i)=>{
        if(ele.skill_id===id){
          arr.splice(i,1)
        } 
      })
      setchunks(arr)
      window.location.reload()
     
        
    }
    else{
      console.log("success false:",jss)
      // changAlert(false)
      // history("/")
    }

  }
  ).catch(err=>{
    changeOverlay(false)
    toggleOverlay(false)
    console.log(err)
    //  changeColor(err)
    //  changAlert(true)
    
   
  }
  )
}
const HandleDeleteAllSkills = ()=>{
  const token=cookies.jwt;
  const skillIdstodelete = chunks.map((ele,i)=>{
    return ele.skill_id
  })
  // axios call
  axios.post("http://localhost:4000/deleteAllSkills",
  {
    data:skillIdstodelete,
    token,
  }
  ).then(d=>{
    const jss =  d.data
    if(jss.Success)
    { 

      // remove from chunks
      setchunks([])
  
      changeOverlay(false)
      toggleOverlay(false)
      window.location.reload()
        // changeColor(jss.message)
        // changAlert(true)

        
    }
    else{
      console.log("success false:",jss)
      // changAlert(false)
      // history("/")
    }

  }
  ).catch(err=>{
    changeOverlay(false)
    toggleOverlay(false)
    console.log(err)
    //  changeColor(err)
    //  changAlert(true)
    
   
  }
  )
}
  return (

    <div className="relative mx-auto my-8 md:my-15 flex min-w-sm flex-col gap-8">
     <Alert
              show={alert}
              color={"red"}
              dismissible={{
                onClose: () =>
                  changAlert(false)
              }}
            >
             {text}
            </Alert>
  

        <div className="flex justify-between ">
           <Typography variant="h3">Skills</Typography>
          
        </div>            
        { ModalName==="Add" && overlay  && 
          <AddSkills slct_skill={slct_skill} select_v={select_v} setSkill={setSkill} changeSelectV={changeSelectV} setData={setData}
          domain_data={domain_data} toggleOverlay={toggleOverlay} changeOverlay={changeOverlay} handleSkill={handleSkill} setDomainData={setDomainData}></AddSkills>
        }

           {/* Update Skills Modal */}
          { ModalName==="Update" && overlay  && 
          <div className= "bg-white z-10 absolute top-[10rem] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl px-8 py-5 space-y-5">
            <div className="text-xl border-b-2 border-gray-700 pb-2 mb-3 ">Update Skills</div>
           
            {chunks && chunks.map((ele,idx)=>{
              let name;
                Object.values(data).map(d=>{
                  // console.log("D:",d)
                  d.forEach(e=>{
                    // console.log("In update",e)
                    if(e._id==ele.skill_id && e.skill_name.length>0){
                      
                      name = e.skill_name
                      arr.push({name,skill_id:e._id})

                    }
                  })
                  // name = data[d].filter(e=>e.skill_id==ele.skill_id)
              })
            
    return (<EditToggle ele={ele} idx={idx} name={name} data={data} Object={Object} setskill_to_edit={setskill_to_edit} changeModalName={changeModalName} HandleDeleteSkill={HandleDeleteSkill}></EditToggle>
              )
            })
            }
            <div className="flex justify-end gap-2">
                <button onClick={e=>{
                  toggleOverlay(false)
                  changeOverlay(false)
                }}  color="red" className="text-lg text-white bg-green-500 rounded px-3 py-1 font-normal capitalize" >Cancel</button>
                <button onClick={HandleDeleteAllSkills}  className="text-lg text-white bg-red-500 rounded px-3 py-1  font-normal capitalize"
                >Delete All</button>
              </div>
          <hr />
          </div>}

           {/* Edit Skills Modal */}
           { ModalName==="Edit" && overlay  && 
              <EditSkill token={cookies.jwt} setskill_to_edit={setskill_to_edit} skill_to_edit={skill_to_edit} changeModalName={changeModalName} handleEditSkill={handleEditSkill}
              chunks={chunks} setchunks={setchunks} changeColor={changeColor} changeOverlay={changeOverlay}
              changeAlert={changAlert} toggleOverlay={toggleOverlay}></EditSkill>
          }
       <div className="flex flex-wrap justify-evenly">
       {domain_data && domain_data.map((ele,idx)=>{
          return(
          <Domain ele={ele} domain={domain} idx={idx} data={data} handleCheck={handleCheck} setdomain={setdomain} setSkills={setSkills}></Domain>
        );
          })
      }
       </div>
       <div className="flex flex-col">
       {domain_data && domain_data.map((dom,idx)=>{
            return(
            <div className={`flex flex-wrap justify-evenly `} id={dom}>
              {
                data[dom] && data[dom].map((ele,idx)=>{
                  return(
                    <DisplaySkill ele={ele} idx={idx} domain={domain} handleToggle={handleToggle} dom={dom} setData={setData} setchunks={setchunks} chunks={chunks} data={data}></DisplaySkill>
                    )
                })
              }
             
            </div>);
          })
       }
       </div>
       
       <div className="flex flex-col md:flex-row justify-center space-x-10 mt-[3rem] " >
           <Button onClick={e=>{changeModalName("Update"); toggleOverlay(true); changeOverlay(true)}} varient="gradient"  className="px-7 bg-orange-600 h-10 inline-flex items-center  w-[12rem] justify-center" >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
           </svg>

           <span>Update Skills</span></Button>
           <Button varient="gradient" color="green" className={`w-[9rem] justify-center`} onClick={handleButton}>Save Changes</Button>

           <Button onClick={e=>{changeModalName("Add"); toggleOverlay(true); changeOverlay(true)}} varient="gradient" color="pink" className="px-9 h-10 items-center  w-[10rem] justify-center" >+ Add Skill</Button>

           
      </div>
        




      
    </div>
  );
}

export default Skills;
