import React from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect,useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import {CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export function Skills({toggleOverlay}) {
  // [{"_id":"63af1e42157be2cd2d498984","skill_name":"c","domain":"Technical","__v":0},{"_id":"63af1e42157be2cd2d498986","skill_name":"c++","domain":"Technical2","__v":0}]
  const [data,setData]=useState({});
  let history=useNavigate();
  const [domain_data,setDomainData]=useState([])
  const [skills,setSkills]=useState([])
  const [userdata,setUserdata]=useState([])
  const [domain, setdomain] = useState("")
  const [chunks, setchunks] = useState([])
  // const [chunksName, setchunksName] = useState([])
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
    

    async function fetchUserData(){
      let dt=[]
      const token=cookies.jwt;
       await axios.post("http://localhost:4000/employees/123",
       {
        cookie:token,
       },
       {  
       withCredentials:true } // could also try 'same-origin'
  
       ).then(d=>{
        const dd=d.data.data.Skills 
        dt=dd
        setUserdata(dd)
        // console.log(dd)
       
        // console.log(data)

        setchunks(dd)

       }).catch(err=>{
          console.log("dfghj",err)
      
        
       })
//Api for getting skills from the database
       await axios.get("http://localhost:4000/getSkills",
     {  withCredentials:true } 
     ).then(d=>{
     
        console.log(d.data)
        const dd=(d.data).data
        const res={}
        dd.forEach((ele) => {
          ele.checked=false;
          ele.YOE=0
          ele.level='Beginner'
          if (res[ele.domain]) {
            res[ele.domain].push(ele);
          } else {
            res[ele.domain] = [ele];
          }

          // console.log(ele)
        })
        setData(res)
        
        const dom=Object.keys(res)

        
       
        console.log("userdata",dt)
        // console.log("",res)
        dom.map(dom=>{
          // console.log(dom)
        res[dom].map((ele)=>{
            const n=dt.find((newSkill)=>{
              return ele._id===newSkill.skill_id
               
            })
            if(n)
            {
              ele.checked=true
              ele.level=n.level
              ele.YOE=n.YOE
            }
          })
          // res[dom]=updated
        })
        console.log(res)
        setDomainData(Object.keys(res))
        setdomain(dom[0])
        // setSkills(res[dom[0]])

     }).catch(err=>{
      console.log("dfghj",err)
     })
    }
    fetchUserData();


   
  },[])
 //Handling the toggole selection of the domain
  const handleCheck=(e)=>{
      
    setdomain(e.target.name)
    
    console.log("Idharr:")
    for(const ele in data){
      if(ele===e.target.name)
      {
        const d=data[ele]
        console.log(d)
        setSkills(d)
        return ;
      }
    }


    
    // console.log("chn",domain)
  }
  
  //Handling the toggle selection fo the skills in domain
  const handleToggle=(idx,index,dom)=>{
    const chkbox =  document.getElementById(idx+'checkbox')
    const slct =  document.getElementById(idx+'select')
    const num =  document.getElementById(idx+'number')
    const flex=document.getElementById(idx+'flex');
    
    const grid=document.getElementById(idx+'grid');
    const name =  chkbox.name
    console.log(chkbox.checked)
    if(chkbox.checked)
    {
      console.log(chkbox)
      
      flex.classList.remove('bg-white')
      flex.classList.remove('text-blue-600')
      grid.classList.remove('hidden')
      flex.classList.add('bg-blue-600')
      flex.classList.add('text-white')

      const arr=[...chunks]
      const fData=arr.filter(ele=> ele.skill_id===name)
      if(fData.length)
      {
        for(const ele of arr){
          if(ele.skill_id===name){
            ele.level=slct.value || 1
            ele.YOE=num.value
          }
        }
        
        console.log(data)
        console.log(arr)
      }
      else{
        arr.push({
          skill_id:name,
          domain:domain,
          level:slct.value,
          YOE:num.value || 1,
        })
       
      }
      const temp=data
      temp[dom][index].checked=true;
      temp[dom][index].YOE=num.value
      temp[dom][index].level=slct.value
      setData(temp)
      
      setchunks(arr)
      console.log(arr)
    } else{

      grid.classList.add('hidden')
      flex.classList.remove('bg-blue-600')
      flex.classList.remove('text-white')
      flex.classList.add('bg-white')
      flex.classList.add('text-blue-600')
      // console.log("Unchecked",name)

      const arr = [...chunks]
      const temp=data
      temp[dom][index].checked=false;
      temp[dom][index].YOE=0
      temp[dom][index].level='Beginner'
      setData(temp) 
      arr.filter((ele,i)=>{
        if(ele.skill_id===name){
          arr.splice(i,1)
        }
      })
      setchunks(arr)
      console.log("arr",arr)

    }

    // console.log(chunks)
  }

  

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
const handleSkill=async(e)=>{
  // changeOverlay(false)
  // toggleOverlay(false)
  // const text=(select_v==="Other"?other:select_v)
  console.log(slct_skill)
  console.log(select_v)
  await axios.post("http://localhost:4000/addSkill",
  {
    skill:slct_skill,
    domain:select_v
  },
  {  
  withCredentials:true } // could also try 'same-origin'

  ).then(d=>{
    const jss =  d.data
    if(!jss.Success)
    { 
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

  }).catch(err=>{
    changeOverlay(false)
    toggleOverlay(false)
    console.log(err)
    //  changeColor(err)
    //  changAlert(true)
    
   
  })

}
// console.log("Data",data)
// Object.keys(data).map((ele,i)=>{
//   console.log(ele)
//   console.log(data[ele])
// })
const arr =[];
const handleEditSkill = async ()=>{
    console.log("edit skill")
    const token=cookies.jwt;
    const name = skill_to_edit.skill_name
    const id = skill_to_edit.skill_id
    console.log(name,id)
    // axios call
    axios.post("http://localhost:4000/editSkill",
    {
      skill_id:id,
      skill_name:name,
      token,
    }
    ).then(async d=>{
      const jss =  d.data
      console.log(d)
      if(jss.Success)
      { 
        changeOverlay(false)
          toggleOverlay(false)
          // update chunks
          const arr = [...chunks]
          arr.filter((ele,i)=>{
            if(ele.skill_id===id){
              arr[i].skill_name=name
            }
          })
          console.log("ARRR",arr);
          setchunks(arr)
          await handleButton();
          window.location.reload()
          changeColor(jss.message)
          changAlert(true)

          
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
console.log("chunks",chunks)
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
      console.log("ARRR",arr);
      setchunks(arr)
       await handleButton();

      // changeOverlay(false)
      //   toggleOverlay(false)
      //   changeModalName("")
        window.location.reload()
      //   changeColor(jss.message)
      //   changAlert(true)

        
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
  axios.post("http://localhost:4000/skills/deleteAllSkills",
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
  {/* overlay */}
  

        <div className="flex justify-between ">
           <Typography variant="h3">Skills</Typography>
           <div className="flex  space-x-5" >
           <Button onClick={e=>{changeModalName("Update"); toggleOverlay(true); changeOverlay(true)}} varient="gradient"  className="px-7 bg-yellow-600 h-10 inline-flex items-center space-x-3" >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

             <span>Update Skills</span></Button>
           <Button onClick={e=>{changeModalName("Add"); toggleOverlay(true); changeOverlay(true)}} varient="gradient" color="green" className="px-9 h-10 items-center" >+ Add Skill</Button>
           </div>
        </div>            
        { ModalName==="Add" && overlay  && <div className= "bg-white z-10 absolute top-[10rem] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl px-8 py-5">
            <div className="text-xl border-b-2 border-gray-700 pb-2 mb-3">Add Skill</div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-0">
                <label htmlFor="skill">Skill <small className="text-red-900 absolute ml-1 ">*</small> </label>
                <input type="text" value={slct_skill} name="skill" id="skill" className="border-b-2 border-blue-300  px-2 py-1 outline-none" onChange={e=>setSkill(e.target.value)}/>
              </div>
              <div className="flex flex-col gap-2">
             
                <label htmlFor="domain">Domain <small className="text-red-900 absolute ml-1 ">*</small></label>
                <select className=" px-3 py-1 outline-none bg-white border border-blue-500 " name="" id="" value={select_v} onChange={e=>(changeSelectV(e.target.value))}>
                  {
                    domain_data && domain_data.map((ele,idx)=>{
                      return <option key={idx} value={ele}>{ele}</option>
                    })
                  }
                </select>
               

              </div>
              
              <div className="flex justify-end gap-2 pb-3">
                <button onClick={e=>{
                  toggleOverlay(false)
                  changeOverlay(false)
                }}  color="red" className="text-lg text-white bg-red-500 rounded px-3 py-1 font-normal capitalize" >Cancel</button>
                <button  className="text-lg text-white bg-green-500 rounded px-3 py-1  font-normal capitalize" onClick={e=>handleSkill(e)}
                >Add</button>
              </div>
              </div>
          <hr />
          </div>}

           {/* Update Skills Modal */}
          { ModalName==="Update" && overlay  && 
          <div className= "bg-white z-10 absolute top-[10rem] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl px-8 py-5 space-y-5">
            <div className="text-xl border-b-2 border-gray-700 pb-2 mb-3 ">Update Skills</div>
           
            {chunks && chunks.map((ele,idx)=>{
              let name;
              
              // console.log("Ele:",ele.skill_id)
                Object.values(data).map(d=>{
                  // console.log("D:",d)
                  d.forEach(e=>{
                    if(e._id==ele.skill_id && e.skill_name.length>0){
                      name = e.skill_name
                      arr.push({name,skill_id:e._id})

                    }
                  })
                  // name = data[d].filter(e=>e.skill_id==ele.skill_id)
              })
              // setchunksName(prev=>[...prev,name])
              // console.log("Name:",name)
              return <div key={idx} className="flex w-screen max-w-xs  justify-between items-center space-x-12">
                <div className="flex items-center gap-2">
                  {/* <input type="checkbox" name="" id="" /> */}
                  <label className="opacity-75" htmlFor="">{name}</label>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 cursor-pointer" onClick={e=>{
                    // setskill_to_edit(ele)
                    let n;
                    Object.values(data).map(d=>{
                      d.forEach(e=>{
                        if(e._id==ele.skill_id){
                          n = e.skill_name
                        }
                      })
                    })
                    setskill_to_edit({skill_id:ele.skill_id,skill_name:n})
                    changeModalName("Edit")
                  }}>Edit</span>
                  <span onClick={e=>HandleDeleteSkill(ele.skill_id)} className="text-red-500 cursor-pointer">Delete</span>
                </div>
              </div>
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
          <div className= "bg-white z-10 absolute top-[10rem] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl px-8 py-5 space-y-5">
            <div className="text-xl border-b-2 border-gray-700 pb-2 mb-3 ">Edit Skill Name</div>
              ID:   <input type="text" value={skill_to_edit.skill_id} disabled />
               <p>Name :</p> <input className="border-b-2 outline-none" type="text" value={skill_to_edit.skill_name} onChange={
                  e=>{
                    setskill_to_edit(prev=>({...prev,skill_name:e.target.value}))
                  }
               } />
            <div className="flex justify-end gap-2">
                <button onClick={e=>{
                  // toggleOverlay(false)
                  // changeOverlay(false)
                  changeModalName("Update")
                }}  color="red" className="text-lg text-white bg-red-500 rounded px-3 py-1 font-normal capitalize"  >Cancel</button>
                <button  className="text-lg text-white bg-green-500 rounded px-3 py-1  font-normal capitalize" 
                onClick={handleEditSkill}
                >Update</button>
              </div>
          <hr />
          </div>}
       <div className="flex flex-wrap justify-evenly">
       {domain_data && domain_data.map((ele,idx)=>{
        // console.log("Domain set here")
       return( <div key={idx} className={`flex items-center justify-center shadow-md rounded-xl h-28 w-[12rem] mb-2 bg-white text-blue-600`}>

 <CheckBadgeIcon className= {`w-5 h-5 text-inherit ${domain!==ele?"hidden":""}`}></CheckBadgeIcon>


        
        <input type="radio" name={ele} id={ele} checked={domain==ele} onChange={e=> handleCheck(e)}  className="hidden" ></input>
        <label htmlFor={ele} className="text-center	text-xl">{ele}</label>
      </div>);
      })
      }
       </div>
       <div className="flex flex-col">
        {/* { domain_data ?handlePrevious:"" } */}
       {domain_data && domain_data.map((dom,idx)=>{
          //console.log("log")
            return(
            <div className={`flex flex-wrap justify-evenly `} id={dom}>
              {
                data[dom] && data[dom].map((ele,idx)=>{
                  
                  // console.log("components rendered")
                  return(
                    <div key={idx} id={ele._id+`flex`} className ={`flex flex-wrap mb-3 justify-center items-center  shadow-md rounded-xl w-[10rem] h-[7.5rem] flex-col ${ele.checked?"bg-blue-600 text-white":"bg-white text-blue-600"} ${domain!==dom?"hidden":""}` } >

                    <input name={ele._id}  type="checkbox" id={ele._id+'checkbox'}  className="hidden" onChange={e=>handleToggle(ele._id,idx,dom)}></input>
                    <label htmlFor={ele._id+'checkbox'} className="text-xl" >{ele.skill_name}</label>
                    <div className={` grid-cols-1 md:grid-cols-1  text-white ${ele.checked?"":"hidden"}`} id={ele._id+`grid`}>
                      <select id={ele._id+'select'} onChange={e=>handleToggle(ele._id,idx,dom)} className="py-1 bg-transparent mb-2 mx-3 lg:mb-0 rounded-lg focus:outline-blue-600" value={`${ele.checked?ele.level:'Beginner'}`}>
                        <option className="text-black">Beginner</option>
                        <option className="text-black">Intermediate</option>
                        <option className="text-black">Expert</option>
                      </select>
                      <div className="grid grid-cols-1 md:grid-cols-2 mx-3 justify-center items-center">
                        <label htmlFor="exp" className="hidden md:block">Exp: </label>
                      <input onChange={e=>handleToggle(ele._id,idx,dom)} id={ele._id+'number'}  
                      type="number" className="-mt-1py-1 w-full px-2 bg-transparent rounded-lg focus:outline-blue-600" placeholder="Year of experience" name="exp"
                      value={`${ele.checked?ele.YOE:0}`}
                      
                      ></input>

                    </div>

                  </div>
                    </div>
                    )
                })


              }
               
              
            </div>);
          })
       }
       </div>
       

        
      <Button varient="gradient" color="blue" className={`ml-3 w-[9rem] justify-center`} onClick={handleButton}>Save Changes</Button>




      <Card> 
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Add more skills
            
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          <label>dfghjk</label>
        </CardBody>
      </Card>
    </div>
  );
}

export default Skills;
