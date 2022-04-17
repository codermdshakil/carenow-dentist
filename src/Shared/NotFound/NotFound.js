import React from 'react';
import notFoundImg from '../../images/404.gif';
import './NotFound.css';


const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="notFoundimg-frame">
                            <img src={notFoundImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;