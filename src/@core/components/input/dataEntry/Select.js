import React from "react"
import { Select } from "antd"


const handleChange = value => {
  console.log(`selected ${value}`)
}

function Select1() {

  return (
    <>
      <label className='form-label' for='nameVerticalIcons'>
        First Name
      </label>
      <div className="input-group">
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            {
              value: "jack",
              label: "Jack"
            },
            {
              value: "lucy",
              label: "Lucy"
            },
            {
              value: "disabled",
              disabled: true,
              label: "Disabled"
            },
            {
              value: "Yiminghe",
              label: "yiminghe"
            }
          ]}
        />
      </div>

      {/* <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        disabled
        options={[
          {
            value: "lucy",
            label: "Lucy"
          }
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        loading
        options={[
          {
            value: "lucy",
            label: "Lucy"
          }
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        allowClear
        options={[
          {
            value: "lucy",
            label: "Lucy"
          }
        ]}
      /> */}
    </>

  );
};



export default Select1;
