import React from 'react'

const Dropdown = ({ items, setKeyword }) => {
    const [value, setValue] = React.useState()

    return (
      <select
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value)
          setKeyword(e.currentTarget.value)
        }}
      >
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    )
  }
  
  export default Dropdown