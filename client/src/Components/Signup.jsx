import React from "react";
import "../App.css";
import { useState } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://banao-api.vercel.app/auth/signup", {
      username,
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
        <p>Have an Account? <Link to="/login">Login</Link></p> 
      </form>
    </div>
  );
};

export default Signup;
