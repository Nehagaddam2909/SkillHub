import React, {  } from 'react';
export default function ShowEmpFilter(props){
  return (
 
          <tr key={props._id}>
            <td>{props.fname} - {props.lname}</td>
            <td>{props.sex}</td>
            <td>{props.loc}</td>
            <td>{props.pos}</td>
            <td>{props.dept}</td>
            {/* <td>{props.email}</td>
            <td>{props.joindate}</td> */}
          </tr>
  );
};

