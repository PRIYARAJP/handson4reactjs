// import logo from './logo.svg';
import './App.css';
import React,{useState } from "react";
// import Student from './student';
import Studentform from './studentform';
function App() {
  const [name, setName]=useState("");
  const [student, setstudent]=useState("");
  const homepage = ()=>{
    setstudent(false)
    console.log("jii");
    setName("HOME PAGE");
    // return(<>
    // <h1>Return</h1>
    // </>)
  }
  const Studentpage = ()=>{
    setName(false)
    // console.log("jii");
    setstudent(
    //  <Student></Student>
    <Studentform/>
      // "HII"
    );
     
    
  }
  return (
    <div className="App">
      <header className="App-header">
       
       <div className="bordering">
        <nav className='updates' onClick={()=>{homepage()}}>HOME</nav>
        <nav className='updates' onClick={()=>{Studentpage()}} >Students</nav>
        <nav className='updates'>Contact US</nav>       
       </div>
       <h1>{name}</h1>
       <p>{student}</p>
      </header>
    </div>
  );
}

export default App;
