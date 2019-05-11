import React from "react";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <span>
      404, page not found. <Link to="/">Back</Link>
    </span>
  );
};

export default notFound;
