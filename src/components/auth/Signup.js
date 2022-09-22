import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/UserAuthContext";

function Signup() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Auth Signup</h2>
                {error && <span variant="danger">{error}</span>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3" controlId="formBasicEmail">
                        <input
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3" controlId="formBasicPassword">
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="d-grid gap-2">
                        <button variant="primary" type="Submit">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/">Log In</Link>
            </div>
        </div>
    );
};

export default Signup;