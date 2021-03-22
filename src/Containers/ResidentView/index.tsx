import React from "react";
import { useParams } from "react-router";

const ResidentView = () => {
  const params = useParams();
  console.log("PARAMS", params);
  return <div>ResidentView</div>;
};

export default ResidentView;
