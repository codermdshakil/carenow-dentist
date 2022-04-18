import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {

    const [ourServices, setOurServices] = useState([]);

    useEffect(() => {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => setOurServices(data))
    }, [])


    return (
        <div>
            <div className="container mb-5 pb-4" id="services">
                <h2 className='text-center service-title py-5' data-aos="fade-down">Our Services</h2>
                <div className="row">
                   {
                       ourServices.map(product => <Service key={product.id} product={product}></Service>)
                   }
                </div>
            </div>
        </div>
    );
};

export default Services;