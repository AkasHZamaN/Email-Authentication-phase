import React from "react";
import { useNavigate } from "react-router-dom";

const Food = ({ food }) => {
    const navigate = useNavigate();
    const { idMeal, strMeal, strCategory, strPrice, strMealThumb } = food;

  const navigateToHandleFoodDetails = idMeal => {
    navigate(`/food/${idMeal}`)
  }
  return (
    <div className="">
      <div className="card">
        <img src={strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p>{strCategory}</p>
          <p>
            <small>{idMeal}</small>
          </p>
          <p className="card-text">${strPrice}</p>
        </div>
        <button onClick={() => navigateToHandleFoodDetails(idMeal)} className="border-0 bg-success bg-opacity-75 text-white rounded-3 py-2">
          Order: {strMeal}
        </button>
      </div>
    </div>
  );
};

export default Food;
