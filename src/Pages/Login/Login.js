import React, { useState } from 'react';
import loginImg from '../../images/login.png';
import googleLogo from '../../images/google.png';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import useSignInWithEmailAndPassword from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// import auth from '../../firebase.init';




const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    // const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)



    // console.log(user)


    // handle email 
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    // handle email 
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }


    const handleFormSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
        console.log('form submitted');
    }


    return (
        <div>
            <div className="container pt-5 mt-2 main-form-container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5 col-md-8 col-11 d-block m-auto">
                        <div className='form-container'>
                            <h3 >Please Login</h3>
                            <form onSubmit={handleFormSubmit}>
                                <label htmlFor="email">Email</label><br />
                                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' required /><br />
                                <label htmlFor="password">Password</label><br />
                                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter your password' required /><br />
                                <p className='forget-title'>Forget Password</p>
                                <button className='login-btn' >Log In <FontAwesomeIcon className='ms-3' icon={faArrowCircleRight} /></button>
                                <p>Don't have an Account? <Link className='text-decoration-none' to='/signup'> <span className='toggle-signup-btn'> Sign Up </span> </Link></p>
                            </form>
                            <div className='or-title'>
                                    <div className='first-border'></div>
                                    <div>
                                        <h4>or</h4>
                                    </div>
                                    <div className='last-border'></div>
                                </div>
                            <button className='goolge-btn'> <img src={googleLogo} className="mr-3" alt="" />     Sign In with Google</button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-8 col-11 d-block m-auto">
                        <div>
                            <img className='img-fluid' src={loginImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;