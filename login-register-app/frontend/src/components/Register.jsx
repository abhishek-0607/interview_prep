import React from "react";
import { useState } from "react";
import "../styles/register.css";
import axios from "axios";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && reEnterPassword === password) {
      axios
        .post("http://localhost:8080/register", user)
        .then((res) => console.log(res));
      //   alert("posted");
    } else {
      alert("invalid entries");
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        onChange={handleChange}
        name="name"
        value={user.name}
        type="text"
        placeholder="enter your name"
      />
      <input
        onChange={handleChange}
        name="email"
        value={user.email}
        type="text"
        placeholder="enter your email"
      />
      <input
        onChange={handleChange}
        name="password"
        value={user.password}
        type="password"
        placeholder="enter your password"
      />
      <input
        onChange={handleChange}
        name="reEnterPassword"
        value={user.reEnterPassword}
        type="password"
        placeholder="re-enter password"
      />

      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => {}}>
        Login
      </div>
    </div>
  );
};
