import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Verification = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getVerification(props.match.params.username).then(
      (response) => {
        // console.log(response.data.username || "ga ada broo");
        setContent(response.data.username || "");
        setTimeout(() => {
          window.location.href = "http://localhost:8081/login";
        }, 3000);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      {content !== "" ? "Verification Succesfull" : "Verification Failed"}
    </div>
  );
};

export default Verification;
