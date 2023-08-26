import React from "react";
import Template from "../components/Template";
import loginImg from '../assets/login.webp'


const Login = ({setIsLoggedIn}) => {
    return (
      
        <Template
            title="Welcome Back"
            desc1="Build Skills for today,Tomorrow and beyond"
            desc2="Education to future-proof your Career"
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />

        
        )
}

export default Login