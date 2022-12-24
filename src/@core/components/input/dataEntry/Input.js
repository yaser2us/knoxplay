import React from "react"
import { Input as AntInput } from "antd"
import "./Input.css"

function Input({item, field, ...rest}) {
    if(!item) return;
    const { label, placeholder } = item;
    const { onChange, value } = field;

    console.log(rest,"restrestrest")
    return (
        <>
            <label className='form-label' for='nameVerticalIcons'>
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
