import React from 'react';
import './Banner.css';
import person1 from '../../../images/persons/person-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-11 d-block m-auto m-md-0">
                        <div className="banner-titles">
                            <p className='semi-title'>We use latest medical technology</p>
                            <h2 className='banner-title'>Your <span className='smile'> Smile </span> is <br /> Our Priority</h2>
                            <p>Dentists diagnose and treat problems with patients' teeth, gums, and related parts of the mouth. They provide advice and instruction on taking care of the teeth.</p>
                            <button className='banner-btn' >Know More <FontAwesomeIcon icon={faArrowCircleRight} /> </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-11 d-block m-auto m-md-0  order-first order-md-last">
                        <div className="banner-img">
                            <img src={person1} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;