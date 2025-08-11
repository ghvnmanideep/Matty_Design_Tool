import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function GLogin({ setLogin }) {
    const navigate = useNavigate();
    const handleLoginSuccess = (credentialResponse) =>
    {
        try {
            const user = jwtDecode(credentialResponse.credential);
            if (!user.email) throw new Error("Email not found in token");
            sessionStorage.setItem('user', JSON.stringify(user));
            setLogin(true);
            navigate('/dashboard');
        } 
        catch (error){console.error("Google login error:", error);}
    };
    const handleLoginError=()=>{console.log("Login Failed");};
    return (<div><GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError}/></div>);}
export default GLogin;