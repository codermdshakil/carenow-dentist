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

    console.log(ourServices)


    return (
        <div>
            <div className="container mb-5 pb-4" id="service">
                <h2 className='text-center service-title'>Our Services</h2>
                <h4 className=' w-md-50  d-block m-auto text-center pb-5 semi-services-title'>Providing Medical Care ForThe <br />  Sickest   In Our Community.</h4>
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