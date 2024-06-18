import React from 'react';
import useAuth from '../Hooks/useAuth';
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { googleLogin, githubLogin } = useAuth();

    const LoginGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const LoginGithub = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='space-x-4'>
            <button className='py-1 px-2 ' onClick={() => LoginGoogle()}><AiFillGooglePlusCircle className='text-[#E1AFD1] text-4xl' /></button>
            <button className='py-1 px-2 ' onClick={() => LoginGithub()}><FaGithub className='text-4xl text-[#E1AFD1]' /></button>
        </div>
    );
};

export default SocialLogin;