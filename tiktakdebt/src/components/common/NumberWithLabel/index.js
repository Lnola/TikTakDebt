import React from "react";

const NumberWithLabel = ({ number, label }) => {
  return (
    <>
      <span>{number}</span>
      <span>{label}</span>
    </>
  );
};

export default NumberWithLabel;
