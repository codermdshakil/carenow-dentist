import React from 'react';
import footerLogo from '../../images/footer-logo.png';
import './Footer.css';

const Footer = () => {

    let date = new Date().getFullYear();

    return (
        <div className="footer-section">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 col-md-4 col-11 d-block m-auto m-md-0">
                        <div className='mt-3'>
                            <img src={footerLogo} className="d-block m-auto" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-11 text-center mt-4">
                        <p> &copy;  All right Reserved <span className='developer'> <a  href="https://www.linkedin.com/in/codermdshakil/" target="_blank"> Md. Shakil Ahmed </a></span> | Student of Programming Hero - {date} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;