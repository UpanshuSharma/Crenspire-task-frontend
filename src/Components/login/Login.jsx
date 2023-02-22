import React, { useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../redux/action/UserAuthAction";
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.UserAuthReducer.loading);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Clicked: ", data);
    dispatch(login(data));
  };

  return (
    <Form className="form" onSubmit={handleLogin}>
      <p className="text">Login Page</p>
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
          {loading ? "Loading..." : "Login"}
        </button>
      </div>

      <Link to="/registration" className="link-text">
        Not have account? click here
      </Link>
    </Form>
  );
}

export default Login;
