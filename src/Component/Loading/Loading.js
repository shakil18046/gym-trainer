import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loading.css";
const Loading = () => {
  return (
    <div
      style={{ height: "400px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      {/* <Spinner animation="border" variant="primary" /> */}
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
