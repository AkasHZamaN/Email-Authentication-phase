import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <section>
      <article className="text-center bg-success bg-opacity-75 text-white py-3">
        <h1 className="fs-3 ">Email Password Authentication</h1>
      </article>
      <Navbar collapseOnSelect expand="lg" bg="success opacity-50" variant="dark">
        <Container>
          <Navbar.Brand className="fs-2 fw-bold" as={Link} to="/">Email Authentication</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/reviews">Reviews</Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/foods">Foods</Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-white" as={Link} to="/register">Register</Nav.Link>
              {
                user ? 
                  <button onClick={handleSignOut}>Sign Out</button>
                :
                <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
