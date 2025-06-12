import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axiosInstance from "../Api/axiosInstance";
import { login_end } from "../Api/end_point";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosInstance
      .post(login_end, input)
      .then((res) => {
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
      </Form>
      <br />
      <br />
    </div>
  );
};

export default Login;
