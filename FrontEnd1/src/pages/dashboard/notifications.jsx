import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";

export function Notifications() {
  // [{"_id":"63af1e42157be2cd2d498984","skill_name":"c","domain":"Technical","__v":0},{"_id":"63af1e42157be2cd2d498986","skill_name":"c++","domain":"Technical2","__v":0}]
  const [data,setData]=useState({});
  const [domain_data,setDomainData]=useState([])
  const [skills,setSkills]=useState([])
  const [domain, setdomain] = useState("")
  const [chunks, setchunks] = useState([]) 
  const [alert,changAlert]=useState(false)
  const [text,changeColor]=useState("")

  //Retriving the domain from the request
  useEffect(()=>{
    async function fetchData()
    {
      await axios.get("http://localhost:4000/getSkills",
     {  withCredentials:true } 
     ).then(d=>{
     
        // console.log(d.data)
        const dd=(d.data).data
        const res={}
        dd.forEach((ele) => {
          if (res[ele.domain]) {
            res[ele.domain].push(ele);
          } else {
            res[ele.domain] = [ele];
          }
        })
        setData(res)
        const dom=Object.keys(res)
        setDomainData(Object.keys(res))
        
        setdomain(dom[0])
        setSkills(res[dom[0]])
        
     }).catch(err=>{
      console.log("dfghj",err)
     })
    }


    fetchData();
    // console.log(domain_data)
  },[])
 //Handling the toggole selection of the domain
  const handleCheck=(e)=>{
      
    setdomain(e.target.name)
    // console.log(domain)
    for(const ele in data){
      if(ele===e.target.name)
      {
        const d=data[ele]
        
        setSkills(d)
        d.map((ele,idx)=>{
          
          const flex=document.getElementById(domain+idx+'flex');
          const grid=document.getElementById(domain+idx+'grid');
          
          //Resetting the grid
          grid.classList.add('hidden')
          flex.classList.remove('bg-purple-600')
          flex.classList.remove('text-white')
          flex.classList.add('bg-white')
          flex.classList.add('text-purple-600')
          setchunks([]);
        });



        
        return ;
      }
    }


    
    // console.log("chn",domain)
  }
  
  //Handling the toggle selection fo the skills in domain
  const handleToggle=(idx)=>{
    const chkbox =  document.getElementById(domain+idx+'checkbox')
    const slct =  document.getElementById(domain+idx+'select')
    const num =  document.getElementById(domain+idx+'number')
    const flex=document.getElementById(domain+idx+'flex');
    const grid=document.getElementById(domain+idx+'grid');
    const name =  chkbox.name
    console.log(chkbox.checked)
    if(chkbox.checked)
    {
      console.log(chkbox)
      
      flex.classList.remove('bg-white')
      flex.classList.remove('text-purple-600')
      grid.classList.remove('hidden')
      flex.classList.add('bg-purple-600')
      flex.classList.add('text-white')

      const arr=[...chunks]
      const fData=arr.filter(ele=> ele.skill_name===name)
      if(fData.length)
      {
        for(const ele of arr){
          if(ele.skill_name===name){
            ele.skill_level=slct.value || 1
            ele.yoe=num.value
          }
        }

        console.log(arr)
      }
      else{
        arr.push({
          skill_name:name,
          domain:domain,
          level:slct.value,
          YOE:num.value || 1
        })
      }
      
      setchunks(arr)
      console.log(arr)
    } else{

      grid.classList.add('hidden')
      flex.classList.remove('bg-purple-600')
      flex.classList.remove('text-white')
      flex.classList.add('bg-white')
      flex.classList.add('text-purple-600')
      // console.log("Unchecked",name)

      const arr = [...chunks]
    
      arr.filter((ele,i)=>{
        if(ele.skill_name===name){
          arr.splice(i,1)
        }
      })
      setchunks(arr)
      console.log(arr)

    }

    // console.log(chunks)
  }

  const handleButton=async()=>{
    if(chunks.length)
    {
      await axios.post(
        "http://localhost:4000/employee/addSkills",{
          skills:chunks
        },
        {
          withCredentials:true
  
        }
  
        
      ).then( (d)=>{
          const jss=d.data
          if(!jss.Success)
          { 
              changeColor(jss.message)
              changAlert(true)
              
          }
          else{
            changAlert(false)
            history("/")
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
  return (

    <div className="mx-auto my-8 md:my-15 flex min-w-sm flex-col gap-8">
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
       
            
       <Typography variant="h3" color="purple">Skills</Typography>
       <div className="flex flex-wrap justify-evenly">
       {domain_data && domain_data.map((ele,idx)=>{
      
       return( <div key={idx} className="flex items-center justify-center bg-white shadow-md rounded-xl h-28 w-[12rem] mb-2">
        <input type="radio" name={ele} id={ele} checked={domain==ele} onChange={e=> handleCheck(e)}  className="hidden" ></input>
        <label htmlFor={ele} className="text-center	text-xl">{ele}</label>
      </div>);
      })
      }
       </div>
       <div className="flex flex-wrap justify-evenly">
       {skills.map((ele,index)=>{
          return (
        <div key={index} id={domain+index+`flex`} className ={`flex flex-wrap mb-3 justify-center items-center  shadow-md rounded-xl w-[10rem] h-[7.5rem] flex-col bg-white text-purple-600 ` } >
          <input name={ele.skill_name}  type="checkbox" id={domain+index+'checkbox'}  className="hidden" onChange={e=>handleToggle(index)}></input>
          <label htmlFor={domain+index+'checkbox'} className="text-xl" >{ele.skill_name}</label>
          <div className={` grid-cols-1 md:grid-cols-1  text-white hidden`} id={domain+index+`grid`}>
            <select id={domain+index+'select'} onChange={e=>handleToggle(index)} className="py-1 bg-transparent mb-2 mx-3 lg:mb-0 rounded-lg focus:outline-purle-600">
              <option className="text-black">Beginner</option>
              <option className="text-black">Intermediate</option>
              <option className="text-black">Expert</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-3 justify-center items-center">
              <label htmlFor="exp" className="hidden md:block">Exp: </label>
            <input onChange={e=>handleToggle(index)} id={domain+index+'number'} defaultValue type="number" className="-mt-1py-1 w-full px-2 bg-transparent rounded-lg focus:outline-purple-600" placeholder="Year of experience" name="exp"></input>

          </div>
        </div>
      </div>);
        })
      }

        
       </div>
      <Button varient="gradient" color="purple" className={`ml-3 w-[9rem] justify-center`} onClick={handleButton}>Save Changes</Button>
       
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts with Icon
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          <label>dfghjk</label>
        </CardBody>
      </Card>
    </div>
  );
}

export default Notifications;
