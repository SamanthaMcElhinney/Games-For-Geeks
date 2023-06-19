import React from "react";
import './Error.css'

const Error = () => {
  return (
    <div>
      <h2 className="error-message">Sorry, you went down the wrong path!</h2>
      <h2 className="error-message">Please check your url and try again!</h2>
    </div>
  );
};

export default Error;
