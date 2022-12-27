import React from "react";
import { Button as AntButton } from "antd";
import "./Button.css"


function Button({ item, managedCallback, ...rest }) {

  if (!item) return;
  const { label, placeholder, disabled } = item;

  return (
    <div>
      <AntButton
        disabled={disabled}
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