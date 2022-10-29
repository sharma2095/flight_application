import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import { login } from "./login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
