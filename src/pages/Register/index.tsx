
// Components
import Button from "../../components/Button"
import {FaEye, FaEyeSlash} from "react-icons/fa"
import { useState, FormEvent, useContext } from 'react'

// Context
import {AuthContext} from "../../context/auth"

function Register(){

    const {register, loading} = useContext(AuthContext)

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirPassword, setConfirPassword] = useState<string>("")
    const [username, setUsername] = useState<string>("")

    const [inputType, setInputType] = useState<string>("password")
    const [inputTypeConfir, setInputTypeConfir] = useState<string>("password")

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isVisibleCofirm, setIsVisibleConfirm] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // API
        register(username, email, password, confirPassword)
    }

    const handleVisible = (confir?: boolean) => {
        
        if(confir){
            setIsVisibleConfirm(!isVisibleCofirm)
            if(!isVisibleCofirm){
                setInputTypeConfir("text")
            } else {
                setInputTypeConfir("password")
            }
        }else {
            setIsVisible(!isVisible)
            if(!isVisible){
                setInputType("text")
            } else {
                setInputType("password")
            }
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
                    <h1>Cadastrar</h1>
                    <span></span>
                </div>
                <input 
                    type="text"
                    placeholder='Nome de usuário'
                    onChange={e => setUsername(e.target.value)}
                    className="inputUserForm"
                />
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
                        !isVisible ? <FaEyeSlash onClick={() => handleVisible()}/> : <FaEye onClick={() => handleVisible()}/>
                        }
                    </div>
                </div>
                <div className='passwordContainerForm'>
                    <input 
                        type={inputTypeConfir}
                        placeholder='Confirmar Senha'
                        className='inputPasswordForm'
                        onChange={e => setConfirPassword(e.target.value)}
                    />
                    <div className='btnEyerPassword'>
                        {
                        !isVisibleCofirm ? <FaEyeSlash onClick={() => handleVisible(true)}/> : <FaEye onClick={() => handleVisible(true)}/>
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

export default Register