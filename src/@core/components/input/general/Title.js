import React from 'react';
import { Typography } from 'antd';
import {
  Label,
} from 'reactstrap'
const { Title: AntTitle } = Typography;

function Title({ label }) {

  // return (
  //   <Label className='form-label' for='nameVerticalIcons'>
  //     First Name
  //   </Label>
  // )

  return (
    <>
      <AntTitle
        style={{
          fontWeight: "500",
          fontFamily: "Montserrat, Helvetica, Arial, Serif",
          fontSize: "1.285rem",
          lineHeight: "1.2",
          color: "#5e5873",
          display: "block",
        }}
      >
        h1. Ant Design Title
      </AntTitle>
    </>
  );
}

export default Title;