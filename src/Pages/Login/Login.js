import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
    const [error, setError] = useState('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    
    let from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        signInWithEmailAndPassword(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            setError('Please check your email and password !!');
        })
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    if(user){
        navigate(from, {replace: true});
    }
  return (
    <div>
      <h1 className="text-center">Please login !!</h1>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
          </Form.Group>
          <p>{error}</p>
          <Button variant="success opacity-75 w-100" type="submit">
            Submit
          </Button>
        </Form>
        <p>Are you new? <Link to={'/register'} className="text-danger text-decoration-none pe-auto" onClick={navigateRegister}>Please Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
