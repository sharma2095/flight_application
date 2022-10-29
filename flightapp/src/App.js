import React,{useState} from "react";

import logo from "./logo.svg";
import "./App.css";
import Register from "./Register";
import {login} from "./login";

function App() {
  const [cuurentForm,setCurrentForm]=useState('login');

  return (
    
    <div className="App">
      {
        currentForm=="Login"?<login/>:<Register/>
      }
      
    </div>
  );
}

export default App;
