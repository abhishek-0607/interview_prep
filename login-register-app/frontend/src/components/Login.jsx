import axios from "axios";
import React, { useState } from "react";
import "../styles/login.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const login = () => {
    axios
      .post("http://localhost:8080/login", user)
      .then((res) => alert(res.data.message))
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        onChange={handleChange}
        name="email"
        value={email}
        type="text"
        placeholder="enter your email"
      />
      <input
        onChange={handleChange}
        name="password"
        value={password}
        type="password"
        placeholder="enter your password"
      />

      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
};
