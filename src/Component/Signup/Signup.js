import React, { useState } from "react";
import auth from "../../Firebase_init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import "./Signup.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [customerror, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
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
  // get confirm password value
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  // signup and create new user
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("your password did not match");
      return;
    }
    if (password.length < 6) {
      setError("your password is to short");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    alert("sent");
    toast("sent email");
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <ToastContainer />
      <form className="form-wrapper" onSubmit={handleSignup}>
        <input
          onBlur={handleEmail}
          type="email"
          name="email"
          placeholder="Type Your Email"
          required
        ></input>
        <input
          onBlur={handlePassword}
          type="password"
          name="password"
          placeholder="Type Your password"
          required
        ></input>
        <input
          onBlur={handleConfirmPassword}
          type="password"
          name="confirm-password"
          placeholder="Type Your password"
          required
        ></input>
        <p className="password-error-one">{customerror}</p>
        <input className="login-btn" type="submit" value="Signup"></input>
      </form>
      <p className="navigate-Login">
        Already register please{" "}
        <Link className="navigate-Login-link" to="/Login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
