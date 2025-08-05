import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/card'

function App() {
  // const [count, setCount] = useState(0)

  const newObj={
    courseName:"chai and code is best youtube channel."
  }

  return (
    <>
      <h1 className='bg-amber-500 text-black p-4 rounded w-72'>Tailwind CSS</h1>
      <Cards username="Nikhil kumar" Obj={newObj}/>
      <Cards userName="kumar" Obj={newObj}/>
      <Cards userName="singh" Obj={newObj}/>
      
    </>
  )
}

export default App
