import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function Title1() {

    return(
  <>
    <Title
    style={{
        fontWeight:"500",
        fontFamily:"Montserrat, Helvetica, Arial, Serif",
        fontSize:"1.285rem",
        lineHeight:"1.2",
        color:"#5e5873",

        display:"block",


    }}
    >h1. Ant Design Title
    </Title>
  </>
);
}

export default Title1;