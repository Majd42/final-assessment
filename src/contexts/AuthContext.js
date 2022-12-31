import { createContext, useContext, useState } from "react";


const AuthContext = createContext()


export const useAuth = () => {
    return useContext(AuthContext)


}


export const AuthProvider = ({children})=> {


    const [loggedin , setLoggedin] = useState(false)

    const handleAuthUser = () => {
        setLoggedin(true)
    }

    return (
        <AuthContext.Provider
            value={{
                loggedin,
                setLoggedin,
                handleAuthUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}