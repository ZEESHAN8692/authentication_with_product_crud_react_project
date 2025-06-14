import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axiosInstance from "../Api/axiosInstance";
import { forget_password_end, login_end } from "../Api/end_point";
import Modal from "react-bootstrap/Modal";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [forgatePassword, setforgetPass] = useState({
    email: "",
    first_school: "",
    newPassword: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const [modelShow, setModelShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    axiosInstance
      .post(login_end, input)
      .then((res) => {
        // console.log(res.data)
        if (res.status === 200) {
          alert("Login successful!");
          console.log(input);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.user.name);
          localStorage.setItem("image", res.data.user.image);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("Login failed. Please try again.");
      });
  };

  // Forgate Password---------------------------------
  const handleShow = () => setModelShow(true);
  const handleClose = () => setModelShow(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setforgetPass({ ...forgatePassword, [name]: value });
  };
  const handleSub = (e) => {
    e.preventDefault();
    console.log(forgatePassword);
    axiosInstance.post(forget_password_end, forgatePassword).then((res) => {
      console.log("sending Data", res.data);
      alert("Password Reset Successfully");
      setModelShow(false);
    });
  };

  return (
    <div className="container">
      <br />
      <br />
      <Form className="allform" onSubmit={handleLogin}>
        <h1 className="text-center">Login</h1>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleInput}
          />
        </Form.Group>

        <br />
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <br />
        <div className="d-flex gap-5">
          <Link to="/signup">Click , if you have not Account</Link>
          <Button variant="primary" onClick={handleShow}>
            Forgote Password
          </Button>
        </div>
      </Form>
      <br />
      <br />

      {/* Model Code */}
      <Modal show={modelShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgote Password</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSub}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="first_schoolss">
              <Form.Label>First School</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First School Name "
                name="first_school"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new Password "
                name="newPassword"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;
