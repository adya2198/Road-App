import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/", {
                email,
                password
            }).then(res => {
                if (res.data === "exist") {
                    history("/Home", { state: { id: email } });
                } else if (res.data === "notexist") {
                    alert("User has not signed up");
                }
            }).catch(e => {
                alert("Wrong details");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <body>
        <div><h1 className="heading">Road Repair and Tracking System</h1>
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={submit} className="login-form">
                <div className="form-group">
                    <input type="email" className="form-input" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-input" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="login-links">
                <p>OR</p>
                <Link to="/signup" className="signup-link">Signup Page</Link>
                <p></p>
                <Link to="/admin" className="signup-link">Admin Login</Link>
            </div>
        </div>
        </div>
        </body>
    );
}

export default Login;
