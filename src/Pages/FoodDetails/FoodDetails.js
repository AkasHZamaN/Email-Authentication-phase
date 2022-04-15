import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FoodDetails = (food) => {
    const {foodId} = useParams();
    return (
        <div>
            <h3>Food Id: {foodId}</h3>
            <p>Food Name: </p>
            <Link to={'/checkout'}>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default FoodDetails;