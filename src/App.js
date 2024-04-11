// import './App.css'
import Home from "./components/Home"
import Home1 from "./components/Home1"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Admin from "./components/admin"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home1" element={<Home1/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;