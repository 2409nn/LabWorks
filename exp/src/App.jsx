import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <StudentCard name='Iskanderious' />
        <StudentCard name='Kirill' />
    </>
  )
}

export default App
