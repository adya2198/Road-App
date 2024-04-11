import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css"; // Import CSS file

function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signup", {
                email,
                password
            }).then(res => {
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "notexist") {
                    history("/home", { state: { id: email } });
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
        <div className="signup-container">
            <h1 className="signup-title">Signup</h1>
            <form onSubmit={submit} className="signup-form">
                <div className="form-group">
                    <input type="email" className="form-input" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-input" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button type="submit" className="signup-button">Signup</button>
            </form>
            <div className="signup-links">
                <p>OR</p>
                <Link to="/" className="login-link">Login Page</Link>
            </div>
        </div>
        </div>
        </body>
    );
}

export default Signup;
