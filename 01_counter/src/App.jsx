import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);

  const IncreaseValue=()=>{
    // console.log('your value is added',Math.random())
    if(counter==20) {
      setCounter(20);
    }else{
      counter=counter+1;
      setCounter(counter);
    }

   
  }

  const DecreaseValue=()=>{
    if(counter<1){
      setCounter(0);
    }else{
      counter=counter-1;
      setCounter(counter)
    }
  
  }

  return (
    <>
      <h1>Frequency Counter</h1>
      <h2>Your value is : {counter}</h2>

      <button onClick={IncreaseValue}>Increase Value{counter}</button>
      <button onClick={DecreaseValue}>Decrease Value {counter}</button>

    </>   
  )
}

export default App
