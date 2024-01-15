import React, { useContext } from 'react'
import { MyNoteContext } from '../context/NoteState'

function ButtonPage() {
  const {handleClick}=useContext(MyNoteContext);
  return (
    <div>
      <button style={{background:"#2222c9",color:"#ffffff"}} onClick={handleClick}>Submit</button>
    </div>
  )
}

export default ButtonPage
