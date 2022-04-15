import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css';


const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth); 
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name, email, password)

    createUserWithEmailAndPassword(email, password)
  };

  const navigateLogin = () => {
    navigate("/login");
  };
  if(user){
    navigate('/foods');
  }
  return (
    <div>
      <h1 className="text-center">Please Register!!</h1>
      
        <div className="register-container">
          <form onSubmit={handleRegister}>
            <input type="text" name="name" id="name" placeholder="Enter Name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
            <input type="submit" value="Register" />
          </form>
          <p className='text-center'>
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-danger text-decoration-none pe-auto"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
        </div>
      
    </div>
  );
};

export default Register;
