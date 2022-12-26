import React from "react"
import { Input as AntInput } from "antd"
import "./style.css"

function Input({ item, field, error, ...rest }) {
    if (!item) return;
    const { label, placeholder, name } = item;
    const { onChange, value } = field;
    const { message = "" } = (error && error[name]) || { message: false }
    console.log(rest, "restrestrestinput", error)
    return (
        <>
            <label className='form-label' for={name}>
                {label}
            </label>
            <div className="input-group">
                <AntInput
                    className={message && "is-invalid"}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                />
            </div>
        </>
    )
}

export default Input;
