import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Admin() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [employeeId, setEmployeeId] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const sum = parseInt(employeeId)%10;

            if (sum === 0) {
                await axios.post("http://localhost:8000/", {
                    email,
                    password
                }).then(res => {
                    if (res.data === "exist") {
                        history("/Home1", { state: { id: email } });
                    } else if (res.data === "notexist") {
                        alert("User has not signed up");
                    }
                }).catch(e => {
                    alert("Wrong details");
                    console.log(e);
                });
            } else {
                alert("Wrong Credential");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <body>
        <div>
            <h1 className="heading">Road Repair and Tracking System</h1>
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form onSubmit={submit} className="login-form">
                    <div className="form-group">
                        <input type="email" className="form-input" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-input" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-input" onChange={(e) => setEmployeeId(e.target.value)} placeholder="Employee ID" />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
        </body>
    );
}

export default Admin;
