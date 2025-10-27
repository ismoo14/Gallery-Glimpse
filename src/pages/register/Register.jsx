import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        password:""
    })

    const [err, setErr] = useState(null)

    const handlechange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) => {
    e.preventDefault();

    try {
        await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
        setErr(err.response.data); 
        const errorMessage = 
        typeof err.response?.data === 'string' 
        ? err.response.data 
        : "Registration failed. Please check your details.";

      setErr(errorMessage);
    }
};
        console.log(err);
return (
    <div className="register">
    <div className="card">
            <section className="section-1">
                <h1>Sign Up</h1>
            <p>Enter your informtion below to Create an account.</p>
            </section>
            <section className="section-2">
                <form>
                    <p> Name</p>
                    <input type="text" placeholder="jhon Doe" name="name" onChange={handlechange} />
                    <p>Email</p>
                    <input type="text" placeholder="Demoaccount@gmail.com" name="email" onChange={handlechange} />
                    <p>Password</p>
                    <input type="password" placeholder="password123" name="password" onChange={handlechange} />
    {err && (
        <p style={{ color: 'white', marginTop: '10px', fontWeight: 'bold' }}>
            {err}
        </p>
        )}
                </form>
                <button className="register-btn" onClick={handleClick}>Create an account</button>
                <h4>Already have an account? <Link to="/login"><span>Login.</span></Link> </h4>
            </section>
        </div>
    </div>
)
}

export default Register