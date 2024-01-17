import React, { useContext } from 'react'
// import { MyNoteContext } from '../../context/ToDoState'
import './Button.css'

function Button({title,handleButton}) {
  //console.log(handleButton);

  return (
    <div>
      <button id='submit'onClick={handleButton}>{title}</button>
    </div>
  )
}

export default Button
