import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id} = useParams();
    const [service, setService] = useState({});
    useEffect(()=>{
        const url =`http://localhost:5000/service/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[id])
    return (
        <div>
            <h1>Details: {service.serviceName}</h1>
            <p>{service.details}</p>
            <p>{service.price}</p>
            <Link to={'/checkout'}>
                <button>Proceed To Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;