import React, {createContext, useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"

import {api, registerUser} from "../services/api"

type authContextProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<any>({})

export const AuthContextProvider = ({children}: authContextProps) => {
    const navigate = useNavigate()

    const [user, setUser] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user")
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false)
    }, [])

    const register = async (username: string, email: string, password: string, confirPassowrd: string) => {

        const response = await registerUser(username, email, password, confirPassowrd)

        console.log(response)

        const loggedUser = response.data.user 
        const token = response.data.token

        setUser(loggedUser)
        localStorage.setItem("user", JSON.stringify(loggedUser))
        localStorage.setItem("token", token)

        api.defaults.headers.Authorization = `Bearer ${token}`

        navigate("/")   
    }

    const logout = () => {
        setUser(false)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null
        navigate("/")
    }

    return (
        <AuthContext.Provider 
            value={{
                loading,
                user,
                register,
                logout
            }}
        > {children} </AuthContext.Provider>
    )

}