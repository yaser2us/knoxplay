import React from "react"
import { Input as AntInput } from "antd"
import "./style.css"

function Input({item, field, ...rest}) {
    if(!item) return;
    const { label, placeholder, name } = item;
    const { onChange, value } = field;

    console.log(rest,"restrestrest")
    return (
        <>
            <label className='form-label' for={name}>
                {label}
            </label>
            <div className="input-group">
                <AntInput 
                    onChange={onChange} 
                    placeholder={placeholder}
                    value={value}    
                />
            </div>
        </>
    )
}

export default Input;
