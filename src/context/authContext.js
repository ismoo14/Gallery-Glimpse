import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        setCurrentUser({id: 1, name: "ismail", profilePic: "https://images.pexels.com/photos/2033933/pexels-photo-2033933.jpeg", email: "Demoaccount@gmail.com"})
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}