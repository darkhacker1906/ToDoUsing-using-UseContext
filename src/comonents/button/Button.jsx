import React from 'react'
import './Button.css'

function Button({title,handleButton}) {
  return (
    <div>
      <button type="submit" onClick={handleButton}>{title}</button>
    </div>
  )
}

export default Button
