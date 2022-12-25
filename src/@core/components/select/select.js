import React from "react"
import { Select as AntSelect } from "antd"

function Select({ item, field, managedCallback, ...rest }) {
    if (!item) return;
    const { label, placeholder, name, options, defaultValue } = item;
    if (!options) return;
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
        </>
    );
};



export default Select;
