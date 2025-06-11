import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-white">
            <b>Awesome Store</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/login" className="text-white">
                Login
              </Nav.Link>

              <Nav.Link href="/signup" className="text-white">
                Signup
              </Nav.Link>

              <Nav.Link href="/dashboard" className="text-white">
                Dashboard
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <h5 className="text-white mb-0 me-3">Welcome, Zeeshan Khan</h5>
              <Image
                src="https://via.placeholder.com/40"
                roundedCircle
                className="user-photo me-2"
                alt="User"
              />
              <Button variant="outline-light">Logout</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
