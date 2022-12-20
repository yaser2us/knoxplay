import React from "react"
import { DatePicker, Space } from "antd"
import "./DatePicker.css"

const onChange = (date, dateString) => {
  console.log(date, dateString)
}

function DatePicker1(){
    return(
    <DatePicker onChange={onChange} />
);
};

export default DatePicker1;