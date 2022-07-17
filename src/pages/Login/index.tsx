import "./Login.css"

// Components
import Button from "../../components/Button"
import {FaEye, FaEyeSlash} from "react-icons/fa"
import { useState, FormEvent, useContext } from 'react'

// Context
import {AuthContext} from "../../context/auth"

function Login() {

  const {login, loading} = useContext(AuthContext)

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [inputType, setInputType] = useState<string>("password")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // API
    login(email, password)
  }

  const handleVisible = () => {
    setIsVisible(!isVisible)
    if(!isVisible){
      setInputType("text")
    } else {
      setInputType("password")
    }
  }

  if(loading){
    return (
      <h1>Carregando...</h1>
    )
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className='TextForm'>
          <h1>Entrar</h1>
          <span></span>
        </div>
        <input 
          type="email"
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
        />
        <div className='passwordContainerForm'>
          <input 
            type={inputType}
            placeholder='Senha'
            className='inputPasswordForm'
            onChange={e => setPassword(e.target.value)}
          />
          <div className='btnEyerPassword'>
            {
              !isVisible ? <FaEyeSlash onClick={handleVisible}/> : <FaEye onClick={handleVisible}/>
            }
          </div>
        </div>
        <Button
          type="submit"
          textBtn='Entrar'  
        />
      </form>
    </div>
  )
}

export default Login