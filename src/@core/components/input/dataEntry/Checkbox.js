import React from "react"
import { Checkbox as AntCheckbox } from "antd"
import "./Checkbox.css"

function Checkbox({item, field, ...rest}) {

  if (!item) return;
  const { label, placeholder } = item;
  const { onChange, value } = field;

  return (
    <AntCheckbox
      value={value}
      onChange={onChange}
    >
      {label}
    </AntCheckbox>
  );
};

export default Checkbox;