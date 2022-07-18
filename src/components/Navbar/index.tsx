import React, { useState, useContext, useEffect } from 'react'
import "./Navbar.css"

// Context
import {AuthContext} from "../../context/auth"

// Components
import {NavLink} from "react-router-dom"
import {GiMoonBats, GiSunCloud} from "react-icons/gi"

function Navbar() {

  const {logout, user} = useContext(AuthContext)

    const [dark, setDark] = useState<boolean>(true)

  const handleTheme = (): void => {
      document.body.classList.toggle("dark")
      localStorage.setItem("theme", "dark")
      setDark(!dark)
  }

  const handleLoggout = (): void => {
    logout()
  }

  return (
    <nav className='navbar containerDark'>
      <h1>Distrito</h1>
      <ul>
        {
          user ? (
            <>
              <li>
                <NavLink to="/create/guild">Criar Guilda</NavLink>
              </li>
              <li>
                <NavLink to="/feed">Feed</NavLink>
              </li>
              <li>
                <NavLink to="/profile/miqueias">Perfil</NavLink>
              </li>
              <li>
                <button onClick={handleLoggout} className="logoutBTN">Sair</button>
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
      </ul>
    </nav>
  )
}

export default Navbar