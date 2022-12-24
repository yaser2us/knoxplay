import React from "react"
import { Input as AntInput } from "antd"
import "./Input.css"

function Input({label, placeholder}) {
    return (
        <>
            <label className='form-label' for='nameVerticalIcons'>
                {label}
            </label>
            <div className="input-group">
                <AntInput placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input;
