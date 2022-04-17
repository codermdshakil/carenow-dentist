import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/google.png';
import loginImg from '../../images/login.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    // const [sWithGoogle] = useSignInWithGoogle(auth);
    console.log(user)

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
        setconfirmPassword(e.target.valur)
    }


    const handleFormSubmit = e => {
        e.preventDefault();

        if(password.length < 6){
            setError('your password should 6 character and  one special character');
            return;
        }
            createUserWithEmailAndPassword(email, password);
            setError('');
            setSuccess('Your Sign Up Successfull')

    }



    return (
        <div>
            <div className="container pt-5 mt-5 main-form-container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5 col-md-8 col-11 d-block m-auto">
                        <div className='form-container'>
                            <h3 >Please Register</h3>
                            <form onSubmit={handleFormSubmit} >
                                <label htmlFor="name">Name</label><br />
                                <input type="name" name="text" placeholder='Enter your name' required /><br />
                                <label htmlFor="email">Email</label><br />
                                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' required /><br />
                                <label htmlFor="password">Password</label><br />
                                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter your password' required /><br />
                                <label htmlFor="confirmPassword">Confirm Password</label><br />
                                <input onBlur={handleConfirmPasswordBlur} type="password" name="password" placeholder='Enter your confirm password' required /><br />
                                <p className='forget-title'>Forget Password</p>
                                <button className='login-btn' >Sign Up <FontAwesomeIcon className='ms-3' icon={faArrowCircleRight} /></button>
                                <p> AlReady have an Account? <Link className='text-decoration-none' to='/login'> <span className='toggle-signup-btn'> Log In </span> </Link> </p>
                            </form>
                            <div className='or-title'>
                                <div className='first-border'></div>
                                <div>
                                    <h4>or</h4>
                                </div>
                                <div className='last-border'></div>
                            </div>
                            <p className='text-danger text-center'>{error}</p>
                            <p className='text-success text-center'>{success}</p>
                            <button className='goolge-btn'> <img src={googleLogo} className="mr-3" alt="" />     Sign Up with Google</button>
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

export default SignUp;