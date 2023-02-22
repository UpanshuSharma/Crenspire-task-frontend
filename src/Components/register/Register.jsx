import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Register.css";
import { signup } from "../../redux/action/UserAuthAction";
function Register() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.UserAuthReducer.loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Submit Clciked: ", data);
    dispatch(signup(data));
  };

  return (
    <Form className="form" onSubmit={handleRegister} method="POST">
      <p className="text">Registration Page</p>

      <FloatingLabel controlId="firstname" label="First Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="First Name"
          name="firstname"
          onChange={handleChange}
          value={data.firstname}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="lastname"
        label="Last Name"
        className="mb-3 inputfield"
      >
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastname"
          onChange={handleChange}
          value={data.lastname}
        />
      </FloatingLabel>

      <FloatingLabel controlId="email" label="Email address" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
      </FloatingLabel>

      <FloatingLabel controlId="password" label="Password" className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={data.password}
        />
      </FloatingLabel>

      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          {loading ? "Loading..." : "Register"}
        </button>
      </div>

      <Link to="/login" className="link-text">
        Already have account? click here
      </Link>
    </Form>
  );
}

export default Register;
