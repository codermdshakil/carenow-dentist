import React from 'react';
import { Spinner } from 'react-bootstrap';

const Spinners = () => {
    return (
        <div style={{height:'300px'}} className="d-flex align-items-center justify-content-center w-100">
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Spinners;