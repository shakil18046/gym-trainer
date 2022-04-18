import React from "react";
import error from "../../img/error.jpg";
import "./Notfound.css";
const NotFoundPage = () => {
  return (
    <div className="notfoundpage">
      <img src={error} alt=""></img>
    </div>
  );
};

export default NotFoundPage;
