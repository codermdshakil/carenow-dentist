import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import loginImg from '../../images/login.png';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/google.png';
import useSignInWithGoogle from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignUp = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const handleGoogleSignIn = () => {
        signInWithGoogle();
        console.log('hello google');
    }

    return (
        <div>
            <div className="container pt-5 mt-5 main-form-container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5 col-md-8 col-11 d-block m-auto">
                        <div className='form-container'>
                            <h3 >Please Register</h3>
                            <form >
                                <label htmlFor="name">Name</label><br />
                                <input type="name" name="text" placeholder='Enter your name' required /><br />
                                <label htmlFor="email">Email</label><br />
                                <input type="email" name="email" placeholder='Enter your email' required /><br />
                                <label htmlFor="password">Password</label><br />
                                <input type="password" name="password" placeholder='Enter your password' required /><br />
                                <label htmlFor="confirmPassword">Confirm Password</label><br />
                                <input type="password" name="password" placeholder='Enter your confirm password' required /><br />
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
                            <button onClick={handleGoogleSignIn} className='goolge-btn'> <img src={googleLogo} className="mr-3" alt="" />     Sign In with Google</button>
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