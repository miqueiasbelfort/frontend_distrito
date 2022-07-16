import React,{ useState, useContext } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"

// components
import Navbar from './components/Navbar'

// pages
import Login from './pages/Login'
import Register from './pages/Register'

// Context
import { AuthContextProvider } from './context/auth'

const App: React.FC = () => {


  return (      
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
  )
}

export default App
