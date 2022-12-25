import React from "react"
import { Select as AntSelect } from "antd"


const handleChange = value => {
  console.log(`selected ${value}`)
}

function Select({ item, field, managedCallback, ...rest }) {
  if (!item) return;
  const { label, placeholder, name } = item;
  const { onChange, value } = field;
  return (
    <>
            <label className='form-label' for={name}>
        {label}
      </label>
      <div className="input-group">
        <AntSelect
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={onChange}
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



export default Select;
