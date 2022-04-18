import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ServicesDetails = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');




    const handleNameBlur = e => {
        setName(e.target.value);
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handleAddressBlur = e => {
        setAddress(e.target.value);
    }

    const handlePhoneBlur = e => {
        setPhone(e.target.value);
    }


    // handle form submit funtion 
    const handleFormSubmit = e => {
        e.preventDefault();
        setMessage('Thank you for Booking')
    }


    return (
        <div className="container pt-5 mt-2 main-form-container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5 col-md-8 col-11 d-block m-auto order-first order-md-last">
                        <div className='form-container'>
                            <h3 > Check Out Information </h3>
                            <form onSubmit={handleFormSubmit}>
                                <label htmlFor="name">Name</label><br />
                                <input onClick={handleNameBlur}  type="text" name="name" placeholder='Enter your name' required /><br />
                                <label htmlFor="email">Email</label><br />
                                <input onClick={handleEmailBlur} type="email" name="email" placeholder='Enter your email' required /><br />
                                <label htmlFor="address">Address</label><br />
                                <input onClick={ handleAddressBlur}  type="text" name="address" placeholder='Enter your address' required /><br />
                                <label htmlFor="password">Phone Number</label><br />
                                <input onClick={ handlePhoneBlur } className='mb-4' type="number" name="number" placeholder='Enter your phone number' required /><br />

                                <p className='bg-success  rounded text-white text-center'>{message ? message : ""}</p>

                                <button className='login-btn mb-3' > Booking <FontAwesomeIcon className='ms-3' icon={faMoneyCheck} /></button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ServicesDetails;