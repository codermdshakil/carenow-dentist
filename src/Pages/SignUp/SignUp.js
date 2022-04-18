import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/google.png';
import loginImg from '../../images/login.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    // handle email 
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }


    // handle password
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    // handle confirm password
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }


    const handleFormSubmit = e => {

        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Your two password did not match!');
            setSuccess('')
            return;
        }
        else if (password.length < 6 || confirmPassword.length < 6) {
            setError('Your password should 6 character and longer!');
            setSuccess('')
            return;
        }
        createUserWithEmailAndPassword(email, password);
        setSuccess('Sign Up Successfull')
        setError('');
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }



    return (
        <div>
            <div className="container pt-5 mt-5 main-form-container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-7 col-md-8 col-11 d-block m-auto">
                        <div data-aos="fade-down-right">
                            <img className='img-fluid' src={loginImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-8 col-11 d-block m-auto order-first order-md-last">
                        <div className='form-container' data-aos="fade-down-left">
                            <h3 >Please Register</h3>
                            <form onSubmit={handleFormSubmit} >
                                <label htmlFor="email">Email</label><br />
                                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' required /><br />
                                <label htmlFor="password">Password</label><br />
                                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter your password' required /><br />
                                <label htmlFor="confirmPassword">Confirm Password</label><br />
                                <input onBlur={handleConfirmPasswordBlur} type="password" name="confirmPassword" placeholder='Enter your confirm password' required /><br />
                                <p className='forget-title'>Forget Password</p>
                                <button className='login-btn mb-3 ' >Sign Up <FontAwesomeIcon className='ms-3' icon={faArrowCircleRight} /></button>
                                <p className='text-center'> Already have an Account? <Link className='text-decoration-none' to='/login'> <span className='toggle-signup-btn'> Log In </span> </Link> </p>
                            </form>
                            <div className='or-title'>
                                <div className='first-border'></div>
                                <div>
                                    <h4>or</h4>
                                </div>
                                <div className='last-border'></div>
                            </div>
                            <p className='bg-danger  text-white rounded text-center'>{error}</p>
                            <p className='bg-success text-white rounded  text-center'>{success}</p>
                            <button onClick={handleSignInWithGoogle} className='goolge-btn'> <img src={googleLogo} className="mr-3" alt="" />     Sign in with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;