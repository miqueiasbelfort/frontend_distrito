import React, { useState } from 'react'
import "./Navbar.css"


// Components
import {NavLink} from "react-router-dom"
import {GiMoonBats, GiSunCloud} from "react-icons/gi"

function Navbar() {

    const [dark, setDark] = useState<boolean>(true)

  const handleTheme = () => {
    document.body.classList.toggle("dark") // Add dark theme
    setDark(!dark)
  }

  return (
    <nav className='navbar'>
      <h1>Distrito</h1>
      <ul>
        <li>
            <NavLink to="/register">Cadastrar</NavLink>
        </li>
        <li>
            <NavLink to="/">Entrar</NavLink>
        </li>
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