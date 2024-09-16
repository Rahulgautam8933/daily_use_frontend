import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
