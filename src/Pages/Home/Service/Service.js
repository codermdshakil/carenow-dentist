import React from 'react';
import './Service.css';

import { useNavigate } from 'react-router-dom';

const Service = ({product}) => {

    const { id, img, name, price, description } = product;

    const navigate = useNavigate()


    const handleShowDetails = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='col-lg-4 col-md-6 col-11 d-block m-auto m-md-0  '>
            <div className='service-box'>
                <div className="img-frame">
                    <img src={img} alt="" />
                </div>
                <div className='service-details'>
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                    <p>{description}</p>
                    <button onClick={() => handleShowDetails(id)} className='serviceDetail-btn' >Show Details {/* <FontAwesomeIcon className='ms-2' icon={faArrowRight} /> */}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;