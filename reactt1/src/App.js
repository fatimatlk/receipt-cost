import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [inputToDo , setinputToDo] =useState("")
  const handleToDo = (event)=>{
    console.log(event.target.value);
    setinputToDo(event.target.value);
  }
  const[num,setnum]=useState(0)

  return (
    <React.Fragment>
    <div className="App">
      
      <lable>Write your to do list</lable>
      <input type='text' onChange={handleToDo} ></input>
      <h1>{inputToDo} {num}s</h1>
      <button onClick={()=>setnum(num +1)}>time</button>
      
    </div>
     </React.Fragment>
  );
 
}

export default App;
