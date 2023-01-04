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
  <Popup trigger={<button> Show MyData</button>} position="right center">
    <div>
    <Card className="w-96">
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
          {/* <br />
          Status : {props.online} */}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{props.date}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          View Profile
        </Typography>
      </CardFooter>
    </Card>
        {/* <img src={props.img} alt="img" width={'100px'}/>
        <h3>{props.name}, {props.email}, {props.job}, {props.online}, {props.date}</h3> */}
    </div>
  </Popup>
);