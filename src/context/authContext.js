import axios from "axios";
import { createContext, useEffect, useState } from "react"; 
import { makeRequest } from "../axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const updateCurrentUser = (userData) => {
        setCurrentUser(userData);
    };

    const logout = async () => {
        try {
            await makeRequest.post("/auth/logout"); 
            
            localStorage.removeItem("user");
            setCurrentUser(null);
            
        } catch (err) {
            console.error("Logout failed on API side:", err);
        }
    };

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
        withCredentials:true
        });
        setCurrentUser(res.data)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout, updateCurrentUser }}>
            {children}
        </AuthContext.Provider>
    )
}