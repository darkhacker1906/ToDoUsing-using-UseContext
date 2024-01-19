import React from 'react'

function CheckBox({checkBoxClick,checked}) {
  return (
    <div>
      <input type='checkbox'checked={checked} onChange={ checkBoxClick} />
    </div>
  )
}

export default CheckBox
