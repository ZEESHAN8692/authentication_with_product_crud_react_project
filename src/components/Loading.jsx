import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="Loading">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
