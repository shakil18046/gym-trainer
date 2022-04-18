import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Difference between authorization and authentication?</h1>
      <h5>
        {" "}
        <b>Answer:</b> Simply put, authentication is the process of verifying
        who someone is, whereas authorization is the process of verifying what
        specific applications, files, and data a user has access to. The
        situation is like that of an airline that needs to determine which
        people can come on board.
      </h5>
      <br />
      <h1>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h1>
      <h5>
        {" "}
        <b>Answer:</b> Firebase Authentication provides backend services,
        easy-to-use SDKs, and ready-made UI libraries to authenticate users to
        your app. It supports authentication using passwords, phone numbers,
        popular federated identity providers like Google, Facebook and Twitter,
        and more.
      </h5>
      <br />
      <h1>
        {" "}
        What other services does firebase provide other than authentication?
      </h1>
      <h5>
        <b>Answer:</b> Many third-party service providers can help you in
        growing your business, by either providing specific services like
        Notifications by Twillio or by providing a vast range of services like
        AWS, Google Cloud Platform, which includes hosting, storage,
        authentication and what not.Firebase services which are dependent on
        Google Cloud Platform. So to understand the Firebase services, we have
        to know about the Firebase.
      </h5>
    </div>
  );
};

export default Blog;
