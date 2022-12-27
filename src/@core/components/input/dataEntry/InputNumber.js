import React from "react"
import { InputNumber } from "antd"
import "./InputNumber.css"

const onChange = value => {
  console.log("changed", value)
}

function InputNumer1(){
    return(
        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    );
};


export default InputNumer1;
