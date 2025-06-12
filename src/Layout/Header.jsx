import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("name");
  const navigate = useNavigate();
  const handleLogout = () => {
    window.confirm("Are You Sure");
    localStorage.clear();
    navigate("/login");
  };
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
            {token && (
              <div className="d-flex align-items-center">
                <h5 className="text-white mb-0 me-3">Welcome, {user}</h5>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                  alt=""
                  className="user-photo me-2 rounded-circle"
                />
                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
