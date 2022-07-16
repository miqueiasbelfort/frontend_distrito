import React, {createContext, useState} from "react"

import {useNavigate} from "react-router-dom"

type authContextType = {
    loading: boolean,
    authenticated: boolean,
    user: string,
    register: (username: string, email: string, password: string, confirmPassowrd: string) => void,
    logout: () => void
}

type authContextProps = {
    children: React.ReactNode
}

export const authContext = createContext<authContextType>({})

export const authContextProvider = ({children}: authContextProps) => {

    const navigate = useNavigate()

    const [user, setUser] = useState<{
        id: string, email: string
    } | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const register = (username: string, email: string, password: string, confirmPassword: string) => {
        console.log("user", { username, email, password, confirmPassword })

        if(password === "12345"){
            setUser({id: "1234", email})
            navigate("/feed")
        }
    }
    const logout = () => {
        setUser(null)
        navigate("/")
    }

    return (
        <authContext.Provider 
            value={{loading, register, logout, authenticated: !!user, user}}
        > 
            {children}
        </authContext.Provider>
    )

}