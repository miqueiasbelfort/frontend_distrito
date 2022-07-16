import React, { useState, useContext } from 'react'
import "./Navbar.css"

// Context
import {AuthContext} from "../../context/auth"

// Components
import {NavLink} from "react-router-dom"
import {GiMoonBats, GiSunCloud} from "react-icons/gi"

function Navbar() {

  const {logout, user} = useContext(AuthContext)

    const [dark, setDark] = useState<boolean>(true)

  const handleTheme = () => {
    document.body.classList.toggle("dark") // Add dark theme
    setDark(!dark)
  }

  const handleLoggout = () => {
    logout()
  }

  return (
    <nav className='navbar'>
      <h1>Distrito</h1>
      <ul>
        {
          user ? (
            <li>
              <button onClick={handleLoggout}>Sair</button>
            </li>
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
      </ul>
    </nav>
  )
}

export default Navbar