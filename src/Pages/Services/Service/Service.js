import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const {_id, serviceName, picture, price, details } = service;
  const navigate = useNavigate();


    const handleDetails = id => {
      navigate(`/service/${id}`)
    }

  return (
    <div>
      
      <div className="card">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{serviceName}</h5>
          <p>
              {price}
          </p>
          <p className="card-text">${details}</p>
        </div>
        <button
          onClick={()=> handleDetails(_id)}
          className="border-0 bg-success bg-opacity-75 text-white rounded-3 py-2"
        >
          Order: {serviceName}
        </button>
      </div>
    </div>
  );
};

export default Service;
