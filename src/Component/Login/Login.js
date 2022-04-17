import React, { useState } from "react";
import auth from "../../Firebase_init";

import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  // get email value
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  // get password value
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  // form submit
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/");
  }
  return (
    <div>
      <form className="form-wrapper" onSubmit={handleLogin}>
        <input
          onBlur={handleEmail}
          type="email"
          placeholder="Type Your Email"
          required
        ></input>
        <input
          onBlur={handlePassword}
          type="password"
          placeholder="Type Your password"
          required
        ></input>
        <input className="login-btn" type="submit" value="Login"></input>
      </form>
      <p className="navigate-signup">
        new Here{" "}
        <Link className="navigate-signup-link" to="/Signup">
          please register
        </Link>
      </p>
    </div>
  );
};

export default Login;
