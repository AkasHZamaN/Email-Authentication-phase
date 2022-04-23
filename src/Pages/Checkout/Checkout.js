import React from "react";
import { Toast } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  return (
    <div>
      <h3>this is check out area</h3>
      <div className="w-100 mx-auto">
        <Toast className="w-75 mx-auto my-5">
          <Toast.Header>
            <img
              style={{ height: "90px" }}
              src=""
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-success fw-bold">
              Digital Service <span className="text-warning">Centre</span>
            </strong>
            <small>0 mins ago</small>
          </Toast.Header>
          <Toast.Body className="text-center text-success fw-bold">
            Thanks for Hire Me!!
          </Toast.Body>
        </Toast>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Checkout;
