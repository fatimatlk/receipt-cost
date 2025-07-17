import React from 'react';
import './App.css';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

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
      <container>
      <lable>Write your to do list</lable>
      <input type='text' onChange={handleToDo} ></input>
      <button onClick={()=>setnum(num +1)}>time</button>
      <div>{inputToDo} {num}s</div>

     </container>   
    </div>
     </React.Fragment>
  );
 
}

export default App;
