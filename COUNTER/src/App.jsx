import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(12)

  const addValue = () =>{
    // counter = counter + 1;
    if(counter < 20){
    setCounter(counter + 1);
    console.log("Added",counter);
    }
    else{
      stop;
    }
  }

  let [count, setCount] = useState(13)
  
  const removeValue = () =>{
    // counter + counter - 1;
    if(count > 0){
    setCount(count - 1);
    console.log("Deleted",count);
    }
    else{
      stop;
    }
  }
  return (
    <>
    <h1>Counter</h1>
     <h3>This is just a simple counter</h3>

     <button onClick={addValue}>Increase value:{counter}</button>
      <br />

     <button onClick={removeValue}>Decrease value:{count}</button> 
    </>
  )
}

export default App
