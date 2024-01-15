import React, { useContext } from 'react'
import { MyNoteContext } from '../context/NoteState'

function TablePage() {
    var {arr}=useContext(MyNoteContext);
    console.log(arr);
  return (
    <div>
      
    </div>
  )
}

export default TablePage
