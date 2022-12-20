import React from 'react';
import { Button, Dropdown, Space } from 'antd';

const style= {
    color: "white",
    background: "#7367f0", 
    borderColor: "#7367f0", 
    borderRadius: "0.358rem",
    borderWidth:"1px",

    
    fontSize: "1rem",
    fontFamily:"Montserrat, Helvetica, Arial, Serif",
    fontWeight:"500",
    lineHeight: "1",
    

    paddingTop:"0.986rem 0.786rem",
    verticalAlign: "middle",
    display: "inline-block"

    }

const font={
    color: "#6e6b7b",
    fontSize: "1rem",
    fontFamily:"Montserrat, Helvetica, Arial, Serif",
    fontWeight:"400",
    lineHeight: "1",
    
    paddingTop:"0.986rem 0.786rem",
    verticalAlign: "middle",
    display: "inline-block"
}

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={font}>
        Option 1
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={font}>
        Option 2
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" style={font}>
        Option 3
      </a>
    ),
  },
];



function Dropdown1(){
    return(


      <Dropdown menu={{ items }} placement="bottomLeft" style={style}>
        <Button style={style}>bottomLeft</Button>
      </Dropdown>

);
}

export default Dropdown1;