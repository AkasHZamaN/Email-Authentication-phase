import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    
    const handleDelete = id =>{
        const proced = window.confirm('Are Your Sure!!');
        if(proced){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }

    return (
        <div>
            <h1>Manage Your Services</h1>
            <div className='w-50 mx-auto'>
                {
                    services.map(service => <div key={service._id}>
                        <h4>{service.serviceName} <button onClick={()=> handleDelete(service._id)}>X</button></h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;