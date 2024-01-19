import React from 'react'
import './CheckBox.css'

function CheckBox({checkBoxClick,checked}) {
  return (
    <div>
      <input 
     type='checkbox' className="check_box" checked={checked} onChange={ checkBoxClick} />
    </div>
  )
}

export default CheckBox
