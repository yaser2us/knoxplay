import React from "react";
import { Button as AntButton } from "antd";
import "./Button.css"


function Button({ item, managedCallback, ...rest }) {

  if (!item) return;
  const { label, placeholder } = item;

  return (
    <div>
      <AntButton
        onClick={() => {
          managedCallback({ item });
        }}
      >
        {label}
      </AntButton>
    </div>
  );
}

export default Button;