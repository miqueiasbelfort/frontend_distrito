import React,{ useContext } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import "./App.css"

type childrenProps = {
  children: any
}

// components
import Navbar from './components/Navbar'

// pages
import Login from './pages/Login'
import Register from './pages/Register'
import Feed from "./pages/Feed"
import CreatePost from './pages/CreatePost'

// Context
import { AuthContextProvider, AuthContext } from './context/auth'

const App: React.FC = () => {

  const Private = ({children}: childrenProps) => { // When the user is loged
    const {user} = useContext(AuthContext)
    if(!user){
      return <Navigate to="/"/>
    }
    return children
  }

  const InPrivate = ({children}: childrenProps) => { // When the user is not loged
    const {user} = useContext(AuthContext)
    if(user){
      return <Navigate to="/feed"/>
    }
    return children
  }

  return (      
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<InPrivate><Login/></InPrivate>}/>
            <Route path='/register' element={<InPrivate><Register/></InPrivate>}/>
            <Route path='/feed' element={ <Private><Feed/></Private> }/>
            <Route path='/create/post' element={ <Private><CreatePost/></Private> }/>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
  )
}

export default App
