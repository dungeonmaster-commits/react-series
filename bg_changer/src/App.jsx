import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("white");

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>
        <h1 className='py-5 text-7xl outline-black border-amber-950 italic'>Background Changer</h1>
        <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-white rounded-xl px-3 py-2'>
            <button onClick={()=>setColor("Red")} className='outline-none px-4 py-1 rounded-full text-white' style={{background:"Red"}}>Red</button>
            <button onClick={()=>setColor("Blue")}  className='outline-none px-4 py-1 rounded-full text-white' style={{background:"Blue"}}>Blue</button>
            <button onClick={()=>setColor("Green")}  className='outline-none px-4 py-1 rounded-full text-white' style={{background:"Green"}}>Green</button>
           
             </div>
        </div>
      </div>
    </>
  )
}

export default App
