import React from "react"
import { Select as AntSelect } from "antd"


function Select({ item, field, managedCallback, ...rest }) {
  if (!item) return;
  const { label, placeholder, name, options, defaultValue } = item;
  if(!options) return;
  const { onChange, value } = field;
  return (
    <>
      <label className='form-label' for={name}>
        {label}
      </label>
      <div className="input-group">
        <AntSelect
          defaultValue={defaultValue}
          style={{ width: '100%' }}
          onChange={onChange}
          options={options}
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
