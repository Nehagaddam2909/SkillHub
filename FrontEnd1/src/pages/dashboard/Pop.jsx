import React from 'react';
import Popup from 'reactjs-popup';
import './Pop.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
 

export default (props) => (
  <Popup trigger={<button> View Details</button>} position="right center">
    <div className='w-screen'>

    {/* <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={props.img}
          alt={props.name}
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
        {props.name}
        </Typography>
        <Typography>
          Email : {props.email}
          <br />
          Job : {props.job}
          <br />
          Status : {props.online} 
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{props.date}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          View Profile
        </Typography>
      </CardFooter>
    </Card> */}
        {/* <img src={props.img} alt="img" width={'100px'}/>
        <h3>{props.name}, {props.email}, {props.job}, {props.online}, {props.date}</h3> */}
        
{/* // <!-- component --> */}

            {/* <!-- Code block starts --> */}
            <dh-component>

                
                <div class="lg:w-1/3 md:w-2/3 sm: w-full h-80 bg-gray-100 px-10 pt-10">
                    <div class="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " class=" items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">

                            <div role="listitem" class="">
                                <div class="rounded overflow-hidden shadow-md bg-white">
                                    <div class="absolute -mt-20 w-full flex justify-center">
                                        <div class="h-32 w-32">
                                            {/* <img src={props.img} alt="Display Picture of Charles Keith" role="img" class="rounded-full object-cover h-full w-full shadow-md" /> */}
                                        </div>
                                    </div>
                                    <div class="px-6 mt-16">
                                        <h1 class="font-bold text-3xl text-center mb-1">{props.name}</h1>
                                        <p class="text-gray-800 text-sm text-center">{props.job}</p>
                                        <p class="text-gray-800 text-sm text-center">{props.email}</p>
                                        <p class="text-center text-gray-600 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.
                                        
                                        </p>
                                        <div class="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            
                                            <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href={props.email} class="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dh-component>
            {/* <!-- Code block ends -->
            <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        </div>
  </Popup>
);


