import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authApi';
const Login = () => {
    const[Username,setUsername]=useState("");
    const[Password,setPassword]=useState("");
    const navigate = useNavigate();
    console.log(Username,Password)
    const loginHandel =  async() => {
        try {
            const user =  await login(Username,Password)
            console.log(user)
            localStorage.setItem("user",JSON.stringify(user))
        } catch (error) {
            console.log("aaaa")
        }
    }
    return (
        <div>
            <div className="container">
                <form className="right1">
                    <div className="logo1">
                        <img src="/image/logo.png" />
                    </div>
                    <div className="google-btn">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                        Log in with Google
                    </div>
                    <div className="divider">OR LOGIN WITH EMAIL</div>


                    <div className="form-group">
                        <input type="text" placeholder="Your Email" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>


                    <div className="options">
                       
                        <a href="#">Forgot Your Password?</a>
                    </div>


                    <button type='button' onClick={loginHandel} className="login-btn">Log In</button>


                    <div className="signup">
                        Don’t have an account? <a href="#">Sign Up</a>
                    </div>
                </form>
            </div>


        </div>
    );
};


export default Login;

