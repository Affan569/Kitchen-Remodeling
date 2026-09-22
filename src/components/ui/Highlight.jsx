import React from "react";

const Highlight = ({ children, light = false }) => {
  const colorClass = light ? "text-primary-light" : "text-primary";
  return (
    <span className={`font-heading ${colorClass}`}>
      {children}
    </span>
  );
};

export default Highlight;
