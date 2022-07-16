import React,{ useState, useContext } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"

// components
import Navbar from './components/Navbar'

// pages
import Login from './pages/Login'
import Register from './pages/Register'

// Comtext
import {authContextProvider} from "./context/auth"

function App() {

  const handleClick = () => document.body.classList.toggle("dark") // Add dark theme

  return (
    <authContextProvider>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    </authContextProvider>
  )
}

export default App
