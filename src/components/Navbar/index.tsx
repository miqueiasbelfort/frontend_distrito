import React, { useState, useContext, useEffect } from 'react'
import "./Navbar.css"

// Context
import {AuthContext} from "../../context/auth"
import { api } from '../../services/api'

// Components
import {NavLink} from "react-router-dom"
import {GiMoonBats, GiSunCloud} from "react-icons/gi"
import {BiWorld} from "react-icons/bi"
import {HiUserGroup} from "react-icons/hi"
import {FaUserCircle, FaCode} from "react-icons/fa"
import {IoCreateSharp} from "react-icons/io5"

function Navbar() {

  const {logout, user} = useContext(AuthContext)
  const userLocal = localStorage.getItem("user")
  const [token] = useState(localStorage.getItem("token"))
  const [username, setUsername] = useState<any>()

    const [dark, setDark] = useState<boolean>(true)

    useEffect(() => {

      api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setUsername(res.data)
      })

     }, [token])

  const handleTheme = (): void => {
      document.body.classList.toggle("dark")
      //localStorage.setItem("theme", "dark")
      setDark(!dark)
  }

  const handleLoggout = (): void => {
    logout()
  }

  return (
    <nav className='navbar containerDark'>
      <NavLink to="/feed"><h1 className='logo'>Distrito</h1></NavLink>
      <ul>
        {
          user ? (
            <>
              <li>
                <NavLink
                  className={({isActive}) => (isActive ? "navbarActive" : "")} 
                  to="/challenges"><FaCode/></NavLink>
              </li>
              <li>
                <NavLink
                  className={({isActive}) => (isActive ? "navbarActive" : "")} 
                  to="/create/guild"><IoCreateSharp/></NavLink>
              </li>
              <li>
                <NavLink
                  className={({isActive}) => (isActive ? "navbarActive" : "")} 
                  to="/feed"><BiWorld/></NavLink>
              </li>
              <li>
                <NavLink 
                  className={({isActive}) => (isActive ? "navbarActive" : "")}
                  to="/guilds"><HiUserGroup/></NavLink>
              </li>
              <li>
                <NavLink 
                  className={({isActive}) => (isActive ? "navbarActive" : "")}
                  to={`/profile/${userLocal}`}><FaUserCircle/></NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink 
                  className={({isActive}) => (isActive ? "navbarActive" : "")}
                  to="/register">Cadastrar</NavLink>
              </li>
              <li>
                  <NavLink 
                    className={({isActive}) => (isActive ? "navbarActive" : "")}
                    to="/">Entrar</NavLink>
              </li>
            </>
          )
        }
        <li>
            {
                dark ? (
                    <GiMoonBats
                        onClick={handleTheme}
                        className="themeChange"
                    />
                ) : (
                    <GiSunCloud
                        onClick={handleTheme}
                        className="themeChange"
                    />
                )
            }
        </li>
        {user && (
          <li>
            <button onClick={handleLoggout} className="logoutBTN">Sair</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar