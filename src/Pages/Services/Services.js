import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div>
            <h1>service area</h1>
            <div className='d-flex row row-cols-1 row-cols-md-3 g-4 mx-auto p-4'>
                {
                    services.map(service => <Service 
                        key={service._id}
                        service={service}
                    
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;