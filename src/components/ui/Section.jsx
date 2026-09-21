import React from "react";
import Container from "./Container";

const Section = ({
  children,
  className = "",
  background = "white",
  padding = "normal",
  id,
}) => {
  const backgrounds = {
    white: "bg-background",
    alt: "bg-background-alt",
    primary: "bg-primary",
  };

  const paddings = {
    none: "py-0",
    small: "py-8 md:py-12",
    normal: "py-12 md:py-20",
    large: "py-16 md:py-24",
  };

  const classes = `${backgrounds[background]} ${paddings[padding]} ${className}`;

  return (
    <section id={id} className={classes}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
