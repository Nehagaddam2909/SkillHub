import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,Option
} from "@material-tailwind/react";
import React from "react";
export function SignUp() {
  return (
    <>
      
      <div className="absolute inset-0 z-0 h-full w-full bg-blue-700/50" />
     <div className="absolute  grid w-screen h-screen place-items-center ">
      <div className="absolute block -ml-6 p-6 w-29 md:w-28 border bg-white shadow-lg">
          
            <Typography variant="h3"
                  color="black"
                  className="xl font-bold">Signup</Typography>
            <Typography variant="paragraph"
                  color="black"
                  className="text-xs">Please fill the from to create the account</Typography><hr className="my-2 w-full h-2 border-black"/>
              <div className="flex justify-between mb-3 flex-row">
                  <div className="pr-2">
                    <input type="text" id="FirstName" className="block w-full px-3 py-2.5  black text-x border border-gray-300 sm:text-xs focus:outline-blue-500"  placeholder="First Name"/>
                  </div>
                  <div className="pl-2">
                    <input type="text" id="LastName" className="block w-full px-3 py-2.5   black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Last Name"/>
                  </div>
              </div>
              <div className="flex justify-between mb-3 flex-row">
                  <div className="pr-2">
                    <input type="text" id="Department" className="block w-full px-3 py-2.5  black border border-gray-300 sm:text-xs focus:outline-blue-500"  placeholder="Department"/>
                  </div>
                  <div className="pl-2">
                    <input type="text" id="Position" className="block w-full px-3 py-2.5  black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Position" />
                  </div>
              </div>
              
              <div className="flex justify-between mb-3 flex-row">
                <div className=" w-1/2 flex justify-center">

                <label className="w-1/2 block py-2">Gender:</label>
                    <select className="block bg-white border border-grey-300 focus:outline-blue-500"> 

                      <option value={"Female"}>Female</option>
                      <option value={"Male"}>Male</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                  <div className="w-1/2 pl-2">
                  <input type="text" id="location" className="block w-full px-3 py-2 sm:text-xs border border-gray-300  focus:outline-blue-500"  placeholder="Location"/>
                  </div>
              </div>
              
              <div className="flex mb-3">
                <label className="w-1/2 py-2 pl-2">Select Joining date</label>
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="date" id="JD" className="block w-1/2 px-3 py-2.5 mb-3  black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder=""/>

              </div>

              <div className="mb-3">
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="email" id="Email" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Enter Email"/>

              </div>

              <div className="mb-5 md:mb-6">
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="password" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 sm:text-xs focus:outline-blue-500" placeholder="Enter Password"/>

              </div>

              {/* <input type="submit" id="password" className="block w-full px-3 py-2.5 mb-3 black border bg-blue-500 text-white font-bold text-base focus:outline-blue-500" placeholder="Enter Password"/> */}
              <Button variant="gradient" className="text-sm" fullWidth>
              Sign up
            </Button>


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
