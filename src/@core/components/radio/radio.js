import React from "react"
import { Radio as AntRadio } from "antd"
import "./style.css"


function Radio({ item, field, ...rest }) {
    if (!item) return;
    const { label, placeholder, name, options } = item;
    if(!options) return;
    const { onChange, value } = field;

    return (
        <>
            <label className='form-label' for={name}>
                {label}
            </label>
            <div className="input-group">
                <AntRadio.Group
                    onChange={onChange}
                    options={options}
                    value={value}
                />
            </div>
        </>
    );
};


export default Radio;

