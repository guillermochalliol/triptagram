import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth} from "../../context/UserAuthContext";

import GoogleButton from "react-google-button";

function Login()  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Auth Login</h2>
                {error && <span variant="danger">{error}</span>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3" controlId="formBasicEmail">
                        <input class="form-control"
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3" controlId="formBasicPassword">
                        <input class="form-control"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="d-grid gap-2">
                        <button variant="primary" type="Submit">
                            Log In
                        </button>
                    </div>
                </form>
                <hr />
                <div>
                    <GoogleButton
                        className="g-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}
                    />
                </div>
            </div>
            <div className="p-4 box mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </div>
    );
};

export default Login;