import React from "react"
import { Radio as AntRadio } from "antd"
import "./Radio.css"


function Radio({ item, field, ...rest }) {
    if (!item) return;
    const { label, placeholder, name } = item;
    const { onChange, value } = field;

    const options = [
        { label: 'Apple', value: 'App' },
        { label: 'Pear', value: 'Pea' },
        { label: 'Orange', value: 'Ora' },
    ];

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

