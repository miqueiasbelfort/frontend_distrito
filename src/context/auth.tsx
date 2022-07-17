import React, {createContext, useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"

import {api, registerUser, loginUser} from "../services/api"

type authContextProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<any>({})

export const AuthContextProvider = ({children}: authContextProps) => {
    const navigate = useNavigate()

    const [user, setUser] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const recoveredUserID = localStorage.getItem("user")
        if(recoveredUserID){
            setUser(recoveredUserID)
        }
        setLoading(false)
    }, [])

    const register = async (username: string, email: string, password: string, confirPassowrd: string) => {

        const response = await registerUser(username, email, password, confirPassowrd)

        //console.log(response)

        const token = response.data.token
        const userID = response.data.userId


        setUser(true)

        localStorage.setItem("token", token)
        localStorage.setItem("user", userID)

        api.defaults.headers.Authorization = `Bearer ${token}`

        navigate("/feed")   
    }

    const login = async (email: string, password: string) => {

        const response = await loginUser(email, password)
        const token = response.data.token
        const userID = response.data.userId

        setUser(true)

        localStorage.setItem("token", token)
        localStorage.setItem("user", userID)

        api.defaults.headers.Authorization = `Bearer ${token}`

        navigate("/feed")   

    }

    const logout = () => {
        setUser(false)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        api.defaults.headers.Authorization = null
        navigate("/")
    }

    return (
        <AuthContext.Provider 
            value={{
                loading,
                user,
                register,
                login,
                logout
            }}
        > {children} </AuthContext.Provider>
    )

}