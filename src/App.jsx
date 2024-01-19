import React from 'react'
import HomeDashBoard from './pages/homeDashBoard/HomeDashBoard'
import TodoContext from './context/TodoContext'

function App() {
  return (
    <>
    <TodoContext>
    <HomeDashBoard/>
    </TodoContext>
    </>
  )
}

export default App
