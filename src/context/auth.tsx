import React, {createContext, useState} from "react"
import {useNavigate} from "react-router-dom"

type authContextType = {
    loading: boolean,
    user: boolean,
    register: () => void,
    logout: () => void
}

type authContextProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<any>({})

export const AuthContextProvider = ({children}: authContextProps) => {
    const navigate = useNavigate()

    const [user, setUser] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)

    const register = (username: string, email: string, password: string, confirmPassowrd: string) => {
        setUser(true)
        setLoading(false)
        navigate("/")   
    }

    const logout = () => {
        setUser(false)
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