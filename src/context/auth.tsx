import React, {createContext, ReactNode, useState} from "react"

type authContextType = {
    loading: boolean,
    authenticated: boolean,
    user: string,
    login: (email: string, password: string) => void,
    logout: () => void
}

type authContextProps = {
    children: ReactNode
}

const initialValue = {
    loading: true,
    authenticated: false,
    user: "",
    login: (email: string, password: string) => "",
    logout: () => ""
}

export const authContext = createContext<authContextType>(initialValue)

export const authContextProvider = ({children}: authContextProps) => {

    const [user, setUser] = useState<string | null>()

    const login = (email: string, password: string) => {
        setUser("user")
    }

    return (
        <authContext.Provider 
            value={
                user, login
            }
        > 
            {children}
        </authContext.Provider>
    )

}