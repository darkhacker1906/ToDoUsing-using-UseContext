import React from 'react'
import HomeDashBoard from './pages/homeDashBoard/HomeDashBoard'
import ToDoState from './context/ToDoState'

function App() {
  return (
    <>
    <ToDoState>
    <HomeDashBoard/>
    </ToDoState>
 
    </>
  )
}

export default App
