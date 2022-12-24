import React from "react"
import { Checkbox } from "antd"
import "./Checkbox.css"

const onChange = e => {
  console.log(`checked = ${e.target.checked}`)
}

function Checkbox1() {
  return (
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
  );
};

export default Checkbox1;