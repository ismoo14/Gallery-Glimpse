import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useState } from "react";

const Login = () => {
    const [inputs, setInputs] = useState({
            email:"",
            password:""
        })
    
        const [err, setErr] = useState(null);

        const navigate = useNavigate()
    
        const handlechange = e =>{
            setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
        }
    const {login} = useContext(AuthContext);

    const handlelogin = async (e) => {
        e.preventDefault()
        try{
            await login(inputs);
            navigate("/")
        }catch(err){
            setErr(err.response.data)
            const errorMessage = 
        typeof err.response?.data === 'string' 
        ? err.response.data 
        : "login failed. Please check your details.";

      setErr(errorMessage);
        }
    }

return (
    <div className="login">
        <div className="card">
            <section className="section-1">
                <h1>Login</h1>
            <p>Enter your email below to login to your account.</p>
            </section>
            <section className="section-2">
                <form>
                    <p>email</p>
                    <input type="text" placeholder="Demoaccount@gmail.com" name="email" onChange={handlechange} />
                    <p>password</p>
                    <input type="password" placeholder="password123" name="password" onChange={handlechange} />
                </form>
    {err && (
        <p style={{ color: 'white', marginTop: '10px', fontWeight: 'bold' }}>
            {err}
        </p>
        )}
                <button className="login-btn" onClick={handlelogin} style={{ cursor: "pointer" }}>Login</button>
                <h4>Do not have an account? <Link to="/register"><span>Create an account</span></Link></h4>
            </section>
        </div>
    </div>
)
}

export default Login