import React from 'react';
import Popup from 'reactjs-popup';
import './Pop.css';

export default (props) => (
  <Popup trigger={<button> Show MyData</button>} position="right center">
    <div>Popup content here !!!!!!!!!!!!!
        <img src={props.img} alt="img" width={'100px'}/>
        <h3>{props.name}, {props.email}, {props.job}, {props.online}, {props.date}</h3>
    </div>
  </Popup>
);