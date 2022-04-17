import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Service.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Service = ({ product }) => {

    const { img, name, price, description } = product;

    return (
        <div className='col-lg-4 col-md-6 col-11 d-block m-auto m-md-0  '>
            <div className='service-box'>
                <div className="img-frame">
                    <img src={img} alt="" />
                </div>
                <div className='service-details'>
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                    <p>{description}</p>
                    <button className='serviceDetail-btn' >Show Details <FontAwesomeIcon className='ms-2' icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Service;