import React from "react"
import { Cascader } from "antd"
import "./Cascader.css"

const style={
    width: 300,

    fontSize: "1rem",
    fontFamily:"Montserrat, Helvetica, Arial, Serif",
    lineHeight: "1",
}

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
]

const onChange = value => {
  console.log(value)
}

function Cascader1(){
    return(
  <Cascader options={options} onChange={onChange} placeholder="Please select" style={style}/>
    );
};

export default Cascader1;