import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,Option,
  Alert,
  showAlerts,
} from "@material-tailwind/react";
import React from "react";
import Switch from './Switch';
export function SignUp() {
  let history=useNavigate();
  const [alert,changAlert]=useState(false)
  const [text,changeColor]=useState("")
  const [step,setstep]=useState(0)
  const [detail,setdetail]=useState({
    "about":"","highlight":"","github":"","linkedIn":"","portfolio":""
  });
  const [signup,setSignup]=useState({"first":"","last":"","dept":"","pos":"","gen":"female","jod":"","location":"","email":"","pass":""})
  const laststep=1
  const values={detail,signup}
  let ismanager=0;
 
  const handleClick=async (e)=>{
    // console.log(e.target.value)
    e.preventDefault()
    if(step==0)
        setstep(step+1);
    else
    {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const key=Object.keys(signup)
        key.forEach((e)=>{
            if(!signup[key])
            {
                changeColor(key," can't be empty")

                changAlert(true)
                return ;
            }
            if(key==='email')
            {
                if(!signup[key].match(validRegex))
                {
                    changeColor("Enter valid email")
                    changAlert(true)
                    return ;
                }
                
            }
            if(key=='pos')
            {
                res=signup[key].toLocalLowerCase();
                ismanager=(res.indexOf("manager")>=0?1:0);
            }
        })

        const d= await fetch("http://localhost:4000/signup",{
                  method:"POST",
                  body:JSON.stringify({"FirstName":signup["first"],"LastName":signup["last"],"Gender":signup["gen"],"JoinDate":signup["jod"],"Location":signup["location"],
                  "Department":signup["dept"],"Position":signup["pos"],"Email":signup["email"],"Password":signup["pass"],"ismanager":ismanager,"about":detail["about"
                ],"highlight":detail["highlight"],"portfolio":detail["portfolio"],"github":detail["github"],"linkedIn":detail[""]
            }),
                  headers:{"Content-type":"application/json"}
                })
                const jss=await d.json();
                console.log(jss)
                if(!jss.Success)
                { 
                    changeColor(jss.message)
                    changAlert(true)
                    // history("/auth/sign-in")
                }
                else{
                  changAlert(false)
                  
                  history("/")
                }
              
            
    }
    
  }
 
  return (
    <>
      
      <div className="absolute inset-0 z-0 h-full w-full bg-blue-700/50" />
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
     <div className="absolute  grid w-screen h-screen place-items-center ">
      <div className="absolute block -ml-6 p-6 w-29 md:w-28 border bg-white shadow-lg">
          
            <Typography variant="h3"
                  color="black"
                  className="xl font-bold">Signup</Typography>
            <Typography variant="paragraph"
                  color="black"
                  className="text-xs">Please fill the from to create the account</Typography><hr className="my-2 w-full h-2 border-black"/>
              

            {Switch(step,detail,signup,setdetail,setSignup)}
            <div className="flex justify-center space-x-4">
            <Button variant="outlined"  onClick={e=>setstep(step-1)} className={`${step===0?"hidden":""}`}>Prev</Button>
            <Button variant="gradient" onClick={e=>handleClick(e)} >{step===laststep?"submit":"next"}</Button>
            </div>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign In
                </Typography>
              </Link>
            </Typography>
      </div>
    </div>
    </>
  );
}

export default SignUp;
