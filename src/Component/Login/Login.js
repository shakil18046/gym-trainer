import React, { useState } from "react";
import auth from "../../Firebase_init";
import google from "../../img/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userOne, loadingOne, errorOne] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, errortwo] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // google sign in
  const googleLoginhandle = () => {
    signInWithGoogle();
  };
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

    signInWithEmailAndPassword(email, password);
    if (loading) {
      return <Loading></Loading>;
    }
  };
  const handleResetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("sent email");
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <ToastContainer />
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
      <p style={{ color: "red", textAlign: "center" }}>{error?.message}</p>
      <div className="forgotPassword-wrapper">
        <p className="forgotPassword">forgot password </p>
        <button onClick={handleResetPassword}>reset password</button>
      </div>
      <p className="navigate-signup">
        new Here{" "}
        <Link className="navigate-signup-link" to="/Signup">
          please register
        </Link>
      </p>
      <div className="border-wrapper">
        <span className="border"></span>
        or
        <span className="border"></span>
      </div>
      <div className="googlesigninbtn-wrapper">
        <button onClick={googleLoginhandle} className="googlesigninbtn">
          <img src={google} alt=""></img>sign in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
