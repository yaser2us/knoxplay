import React from 'react';
import { Breadcrumb } from 'antd';

const font = { 
fontSize: "1rem",
fontFamily:"Montserrat, Helvetica, Arial, Serif",
fontWeight:"500",

};

const purple ={
    color: "#5c52c0"
}

function Breadcrumb1(){

    return(
  <Breadcrumb style={font}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item >
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item style={purple}>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
}

export default Breadcrumb1;