import React from "react"
import { Mentions } from "antd"
import "./Mentions.css"

const onChange = value => {
  console.log("Change:", value)
}

const onSelect = option => {
  console.log("select", option)
}

function Mentions1(){
    return(
        <Mentions
        style={{ width: "100%" }}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        options={[
          {
            value: "afc163",
            label: "afc163"
          },
          {
            value: "zombieJ",
            label: "zombieJ"
          },
          {
            value: "yesmeck",
            label: "yesmeck"
          }
        ]}
      />
    );
};

export default Mentions1;
