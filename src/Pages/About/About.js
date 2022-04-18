import React from 'react';
import profileImg from '../../images/codermdshakil.png';
import './About.css';



const About = () => {
    return (
        <div className='about-containers'>
            <div className="container  mt-5 py-5" >
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-11 d-block m-auto ">
                        <div className="img-box mb-4" data-aos="zoom-in-down">
                            <div className="profile-frame">
                                <img src={profileImg} className="img-fluid rounded-circle" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-11 d-block m-auto ">
                        <div className="my-info" data-aos="zoom-in-left">
                            <div className='title-frame'>
                                <h2 className='about-title pb-5'>About Myself</h2>
                            </div>
                            <h3>I'm <span className='name'>Md. Shakil Ahmed</span></h3>
                            <p> My goal is  <b>Full-Stuck Web Developer</b> as a Google Employee . I'm set 6 month's for to be a Full-Stuck Web Developer. This 6 month's will uncompromising I'm still working and practice with my full Concentration dedication hard work. Inshallah I can make it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;