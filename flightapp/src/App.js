import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
