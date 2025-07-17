import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {

  const [inputToDo , setinputToDo] =useState("")
  const handleToDo = (event)=>{
    console.log(event.target.value);
    setinputToDo(event.target.value);
  }
  const[num,setnum]=useState(0)
  const[text,settext]=useState("")

  return (
  
    <React.Fragment>

    <div className="App">

      <div className='container'>

      <lable>Write your receipt</lable>
      <input type='text' onChange={handleToDo} ></input>

      <button onClick={()=>setnum(num +1)}>cost</button>

      <div>
        <h1>{inputToDo}</h1>  <h2>{num}$</h2>
        </div>

      </div>
    </div>
   
     </React.Fragment>
    
  );
 
}
export default App;
