import { Link } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {
    const {login} = useContext(AuthContext);

    const handlelogin = () => {
        login()
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
                    <input type="text" placeholder="Demoaccount@gmail.com" />
                    <p>password</p>
                    <input type="password" placeholder="password123" />
                </form>
                <button className="login-btn" onClick={handlelogin}>Login</button>
                <h4>Do not have an account? <Link to="/register"><span>Create an account</span></Link></h4>
            </section>
        </div>
    </div>
)
}

export default Login