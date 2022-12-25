import React from 'react';
import { Typography } from 'antd';
const { Title: AntTitle } = Typography;

function Title({ item, ...rest }) {

  if (!item) return;
  const { label, placeholder, disabled } = item;

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
        {label}
      </AntTitle>
    </>
  );
}

export default Title;