import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   const[inputList ,setinputList]=useState("");
   const [items ,setitems]=useState([]);
   const itemEvent=(event)=>{
    setinputList(event.target.value);

   };
   const listOfItem=()=>{
     setitems((olditems)=>{
       return[...olditems,inputList];
       console.log("ysh")
     })
     setinputList("");


   };

  return (
    <div  className="container">
    <div className="card">
      <div className="title">
        <h1>ToDo LisT</h1>
      </div>
      <div className="inputf">
        <input type="text" placeholder='Add a Item' value={inputList} onChange={itemEvent}></input>
       
       <button onClick={listOfItem}>+</button>
      <hr></hr>
      </div>
      <div className="list">
        <ul>
         
         {
          
          
          items.map((itemval)=>{
            return(
              <>
              <div className="cross">
              <i className="fa fa-times" aria-hidden="true"/>
              <li> {itemval} </li>
              </div>
              </>
            )
            
          })}
               
         
        </ul>
      </div>

    </div>
     
    </div>
  );
}

export default App;
