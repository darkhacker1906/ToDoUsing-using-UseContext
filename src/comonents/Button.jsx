import React, { useContext } from 'react'
import { MyNoteContext } from '../context/NoteState'
import './Button.css'

function Button() {
  const {handleClick}=useContext(MyNoteContext);
  return (
    <div>
      <button id='submit'onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Button
