import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../Api/axiosInstance";
import { reagister_end } from "../Api/end_point";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    first_school: "",
  });

  const [image, setImage] = useState({});
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    // console.log(value);
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    // console.log(e.target.files[0]);
  };
  const handleSub = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", input.name);
    data.append("email", input.email);
    data.append("mobile", input.mobile);
    data.append("password", input.password);
    data.append("first_school", input.first_school);
    data.append("image", image);
    axiosInstance
      .post(reagister_end, data)
      .then((res) => {
        if (res.status === 200) {
          alert("Account Create Succesfully");
          console.log(input, image);
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container">
        <br />
        <Form className="allform" onSubmit={handleSub}>
          <h1 className="text-center" style={{ color: "#490648" }}>
            Register Your Account
          </h1>

          {/* Name */}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleInput}
              required
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
              required
            />
          </Form.Group>

          {/* Mobile */}
          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mobile number"
              name="mobile"
              onChange={handleInput}
              required
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              required
            />
          </Form.Group>

          {/* First School */}
          <Form.Group className="mb-3" controlId="formBasicFirstSchool">
            <Form.Label>First School</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first school"
              name="first_school"
              onChange={handleInput}
              required
            />
          </Form.Group>

          {/* Image Upload */}
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleImage}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </div>
      <br />
      <br />
    </>
  );
};

export default Signup;
