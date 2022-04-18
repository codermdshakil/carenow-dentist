import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServicesDetails = () => {
    return (
        <div className="container pt-5 mt-2 main-form-container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5 col-md-8 col-11 d-block m-auto order-first order-md-last">
                        <div className='form-container'>
                            <h3 > Check Out Information </h3>
                            <form /* onSubmit={handleFormSubmit} */ >
                                <label htmlFor="email">Email</label><br />
                                <input /* onBlur={handleEmailBlur} */ type="email" name="email" placeholder='Enter your email' required /><br />
                                <label htmlFor="password">Password</label><br />
                                <input /* onBlur={handlePasswordBlur} */ type="password" name="password" placeholder='Enter your password' required /><br />
                                <button className='login-btn mb-3' > Booking <FontAwesomeIcon className='ms-3' icon={faMoneyCheck} /></button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ServicesDetails;