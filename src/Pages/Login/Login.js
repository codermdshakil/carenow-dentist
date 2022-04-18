import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import loginImg from '../../images/login.png';
import googleLogo from '../../images/google.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinners from '../../Shared/Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [user] = useAuthState(auth);

    const [signInWithEmailAndPassword, ,loading , error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, , loadingGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending ] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    if(loading || loadingGoogle || sending ){
        return <Spinners></Spinners>
    }
    

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
        signInWithEmailAndPassword(email, password);
        setErrorMessage('');

        if (error) {
            return setErrorMessage(error.message);
        }


    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    const resetPassword = async () => {
        if(email){
            await sendPasswordResetEmail(email);
            toast('sent Email')
        }
        else{
            toast('Please Enter your Email Address');
        }
    }

    return (
        <div>
            <div className="container pt-5 mt-2 main-form-container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-7 col-md-8 col-11 d-block m-auto">
                        <div data-aos="fade-right" >
                            <img className='img-fluid' src={loginImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-8 col-11 d-block m-auto order-first order-md-last">
                        <div className='form-container' >
                            <h3 >Please Login</h3>
                            <form onSubmit={handleFormSubmit} >
                                <label htmlFor="email">Email</label><br />
                                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' required /><br />
                                <label htmlFor="password">Password</label><br />
                                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter your password' required /><br />
                                <p className=' d-flex align-items-center'>Forget Password? <button className='btn btn-link text-decoration-none' onClick={resetPassword}  style={{cursor:"pointer", color:'#33b8c8'}}  > Reset  Password</button> </p>
                                <button  type='submit' className='login-btn mb-3' >Log In <FontAwesomeIcon className='ms-3' icon={faArrowCircleRight} /></button>
                                <p className='text-center'>Don't have an Account? <Link className='text-decoration-none' to='/signup'> <span className='toggle-signup-btn'> Sign Up </span> </Link></p>
                            </form>
                            <div className='or-title'>
                                <div className='first-border'></div>
                                <div>
                                    <h4>or</h4>
                                </div>
                                <div className='last-border'></div>
                            </div>
                            <p className='bg-danger text-white text-center rounded'>{errorMessage}</p>
                            <button onClick={handleGoogleSignIn} className='goolge-btn'> <img src={googleLogo} className="mr-3" alt="" />   Sign In with Google</button>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;