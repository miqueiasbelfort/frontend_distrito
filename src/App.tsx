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
import CreateGuild from './pages/CreateGuild'
import Profile from "./pages/Profile"
import EditUser from './pages/EditUser'
import Post from "./pages/Post"
import Guilds from "./pages/Guilds"
import Guild from "./pages/Guild"
import Challenges from './pages/Challenges'
import CreateChallenges from './pages/CreateChallenges'

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
            <Route path='/profile/:username' element={ <Private><Profile/></Private> }/>
            <Route path="/profile/edit" element={<Private><EditUser/></Private>}/>

            <Route path='/feed' element={ <Private><Feed/></Private> }/>
            <Route path="/feed/:id" element={<Private><Post/></Private>} />
            <Route path='/create/post' element={ <Private><CreatePost/></Private> }/>

            <Route path='/create/guild' element={ <Private><CreateGuild/></Private> }/>
            <Route path='/guilds/edit/:guildname' element={ <Private><CreateGuild/></Private> }/>
            <Route path='/guilds' element={ <Private><Guilds/></Private> }/>
            <Route path='/guilds/:guildname' element={ <Private><Guild/></Private> }/>

            <Route path="/challenges" element={<Private><Challenges/></Private>} />
            <Route path="/challenges/create/:id" element={<Private><CreateChallenges/></Private>}/>

          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
  )
}

export default App
