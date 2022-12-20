import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import "./AutoComplete.css"

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat)
  })
  
function AutoComplete1(){

    const style={
      width:300
    }
    
    const [value, setValue] = useState("")
    const [options, setOptions] = useState([])
  
    const onSearch = searchText => {
      setOptions(
        !searchText
          ? []
          : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
      )
    }
  
    const onSelect = data => {
      console.log("onSelect", data)
    }
  
    const onChange = data => {
      setValue(data)
    }
  
    return (
      <>
        <AutoComplete
          options={options}
          style={style}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="Input Here"
        />
        <br />
        <br />
        <AutoComplete
          value={value}
          options={options}
          style={style}
          onSelect={onSelect}
          onSearch={onSearch}
          onChange={onChange}
          placeholder="Control Mode"
        />
      </>
    )
  }
  
  export default AutoComplete1;