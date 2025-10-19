import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
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
                    <input type="text" placeholder="jhon Doe" />
                    <p>Email</p>
                    <input type="text" placeholder="Demoaccount@gmail.com" />
                    <p>Password</p>
                    <input type="password" placeholder="password123" />
                    <p>Confirm password</p>
                    <input type="password" placeholder="password123" />
                </form>
                <button className="register-btn">Create an account</button>
                <h4>Already have an account? <Link to="/login"><span>Login.</span></Link> </h4>
            </section>
        </div>
    </div>
)
}

export default Register