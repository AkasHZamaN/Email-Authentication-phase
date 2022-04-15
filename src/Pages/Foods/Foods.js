import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);

    useEffect( () => {
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    return (
        <div className=''>
            <h2 className='text-center'>Sea Foods are Availabe right now !!</h2>
            <div className='d-flex row row-cols-1 row-cols-md-3 g-4 mx-auto p-4'>
                {
                    foods.map(food => <Food
                    key = {food.idMeal}
                    food = {food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;