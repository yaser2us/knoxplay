import React, { useState } from "react"
import { TreeSelect } from "antd"
import "./TreeSelect.css"

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "leaf1"
          },
          {
            value: "leaf2",
            title: "leaf2"
          }
        ]
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "leaf3",
            title: <b style={{ color: "#08c" }}>leaf3</b>
          }
        ]
      }
    ]
  }
]
function TreeSelect1() {
  const [value, setValue] = useState(undefined)

  const onChange = newValue => {
    setValue(newValue)
  }

  return (
    <TreeSelect
      showSearch
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  )
}

export default TreeSelect1
