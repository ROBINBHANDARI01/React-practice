import { useState } from 'react'
import Mycomp from './myComp'
import Darkmode from './themeToggle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Mycomp></Mycomp>
     <Darkmode></Darkmode>
    </>
  )
}

export default App
