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
} from "@material-tailwind/react";

export function SignIn() {
  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full bg-blue-700/50" />
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
                <input type="email" id="Email" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 text-base sm:text-xs focus:outline-blue-500" placeholder="Enter Email"/>

              </div>

              <div className="mb-5 md:mb-6">
                {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
                <input type="password" id="password" className="block w-full px-3 py-2.5 mb-3 black border border-gray-300 text-base sm:text-xs focus:outline-blue-500" placeholder="Enter Password"/>

              </div>
              <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
              {/* <input type="submit" id="password" className="block w-full px-3 py-2.5 mb-3 black border bg-blue-500 text-white font-bold text-base focus:outline-blue-500" placeholder="Enter Password"/> */}
              <Button variant="gradient" className="text-sm" fullWidth>
              Sign In
            </Button>


            <Typography variant="small" className="mt-6 flex justify-center">
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
