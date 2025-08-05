import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [number,setNumber]=useState(false);
  const [character,setCharacter]=useState(false);
  const [password,setPassword]=useState("");
  
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str+="0123456789"
    if(character) str+="!@#$%^&*-=_+{}[]',."

    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length);
       pass+=str.charAt(char);
    }
    setPassword(pass)
  },[length,number,character,setPassword])

  // useRef Hook
  const passwordRef=useRef(null)

  const copyPasswordToClipboard=()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
    alert('Password Copied!');
  }
    
  useEffect(()=>{passwordGenerator()},[length,number,character,passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
      <h1 className='text-white text-center my-4 text-2xl'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none  bg-white w-full py-1 px-3'
        placeholder='Password'
        readOnly 
        ref={passwordRef}/>
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-400 text-white px-3 py-1 shrink-0
         hover:bg-blue-800 active:scale-95 transition-all duration-200' >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          value={length}
          min={6}
          max={30}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} />
          <label className='text-xl' >Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
            id="numberInput"
            defaultChecked={number}
            onChange={()=>setNumber((prev)=>!prev)} />
            <label className='text-xl' >Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
            id="characterInput"
            defaultChecked={character}
            onChange={()=>setCharacter((prev)=>!prev)} />
            <label className='text-xl' >Character</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
