import React from 'react';
import './Switch.css';
import { Switch } from 'antd';

const onChange = () => {
  console.log(`switch to ${checked}`);
};

function Switch1(){
    return(
        <div>
            <Switch defaultChecked onChange={onChange} />
            </div>

    );
};


export default Switch1;