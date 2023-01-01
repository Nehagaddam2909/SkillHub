import { Link,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
  showAlerts,
  
} from "@material-tailwind/react";

export function SignIn() {
  let axiosConfig = {
    withCredentials: true,
  }
  const [email,changeEmail]=useState("")
  const [password,changePassword]=useState("")
  const [alert,changAlert]=useState(false)
  const [text,changeColor]=useState("")
  let history=useNavigate();
  const handleClick=async(e)=>{
    if(!email.length)
    {
      changeColor("Email can't be empty")
      changAlert(true)
      return ;
    }
    else 
    {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(!email.match(validRegex))
      {
          changeColor("Enter valid email")
          changAlert(true)
          return ;
      }
    }
    if(!password.length)
    {
      changeColor("Password can't be empty")
        changAlert(true)
        return ;
    }
    const data={email,password}
    // console.log(data)
    await axios.post(
      "http://localhost:4000/login",{
      email:email,
      password:password
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
     
      <div className="absolute block -ml-6 p-6 w-29 md:w-22 border bg-white shadow-lg">
          
            <Typography variant="h3"
                  color="black"
                  className="xl font-bold">SignIn</Typography>
            <Typography variant="paragraph"
                  color="black"
                  className="text-xs">Please fill the from to login</Typography><hr className="my-2 w-full h-2 border-black"/>
              

              <div className="mb-3">
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="email" id="Email" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 text-base sm:text-xs focus:outline-blue-500" placeholder="Enter Email"
                value={email} onChange={(e)=>(changeEmail(e.target.value))} required/>

              </div>

              <div className="mb-5 md:mb-6">
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="password" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 text-base sm:text-xs focus:outline-blue-500" placeholder="Enter Password"
                value={password} onChange={(e)=>(changePassword(e.target.value))} required/>

              </div>
              <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
              {/* <input type="submit" id="password" className="block w-full px-3 py-2.5 mb-3 black border bg-blue-500 text-white font-bold text-base focus:outline-blue-500" placeholder="Enter Password"/> */}
              <Button variant="gradient" className="text-sm" onClick={handleClick} fullWidth>
              Sign In
            </Button>


            <Typography variant="small" className="mt-6 flex justify-center" >
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign Up
                </Typography>
              </Link>
            </Typography>
      </div>
    </div>
    </>
  );
}

export default SignIn;
