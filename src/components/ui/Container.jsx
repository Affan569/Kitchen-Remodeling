import React from "react";

const Container = ({ children, className = "", wide = false }) => {
  const maxWidth = wide ? "max-w-7xl" : "max-w-6xl";
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
