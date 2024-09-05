import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NumberConverter from "./components/NumberConverter"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NumberConverter/>
    </>
  )
}

export default App
