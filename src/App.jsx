import { useState } from 'react'
import './App.css'
import F_api from './components/pages/F_api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <F_api />
      </div>
    </>
  )
}

export default App
