import React,{ useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"

// components
import Navbar from './components/Navbar'

// pages
import Login from './pages/Login'

function App() {

  const handleClick = () => document.body.classList.toggle("dark") // Add dark theme

  return (
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
