import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [count,setCount]=useState(10)

  let [Name,setName]=useState("Garry")
  const addValue=()=>
    {
        setCount(count+1)
    }

    const printName=()=>
    {
      let name=document.getElementById("name").value;
      console.log(document.getElementById("name").value);
      
      setName(name)
    }


    const decrementValue=()=>{
      setCount(count-1)
    }
  return (
    <>
    <h1>Hello This is Example Of Hooks <br></br>And my name is {Name}</h1>
    <h3>Counter={count}</h3>
    <input type="text" name="name" id="name" onChange={printName}/>
    <button onClick={addValue}>Increment by 1</button>

    <button onClick={decrementValue}>Decrement by 1</button>

</>
  )
}

export default App
