import React, { useState, useContext, useEffect } from 'react'
import "./Navbar.css"

// Context
import {AuthContext} from "../../context/auth"

// Components
import {NavLink} from "react-router-dom"
import {GiMoonBats, GiSunCloud} from "react-icons/gi"
import {BiWorld} from "react-icons/bi"
import {HiUserGroup} from "react-icons/hi"
import {FaUserCircle, FaCode} from "react-icons/fa"
import {IoCreateSharp} from "react-icons/io5"

function Navbar() {

  const {logout, user} = useContext(AuthContext)

    const [dark, setDark] = useState<boolean>(true)

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
      <h1 className='logo'>Distrito</h1>
      <ul>
        {
          user ? (
            <>
              <li>
                <NavLink to="/challenges"><FaCode/></NavLink>
              </li>
              <li>
                <NavLink to="/create/guild"><IoCreateSharp/></NavLink>
              </li>
              <li>
                <NavLink to="/feed"><BiWorld/></NavLink>
              </li>
              <li>
                <NavLink to="/guilds"><HiUserGroup/></NavLink>
              </li>
              <li>
                <NavLink to="/profile/miqueias"><FaUserCircle/></NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/register">Cadastrar</NavLink>
              </li>
              <li>
                  <NavLink to="/">Entrar</NavLink>
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