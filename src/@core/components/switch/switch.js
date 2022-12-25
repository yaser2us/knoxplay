import React from 'react';
import './style.css';
import { Switch as AntSwitch } from 'antd';

function Switch({ item, field, managedCallback, ...rest }) {
  if (!item) return;
  const { label, placeholder, name, options, defaultValue } = item;
  if (!options) return;
  const { onChange, value } = field;

  return (
    <>
      <AntSwitch 
        defaultChecked={defaultValue} 
        onChange={onChange}
       />
       {label}
    </>

  );
};


export default Switch;