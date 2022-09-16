import React from "react";

export const ProjectImage = (props) => {
  return (
    <a href={props.image.link} target="_blank" rel="noreferrer">
      <img
        src={props.image.image}
        className="img-fluid"
        alt={props.image.alt}
      />
    </a>
  );
};
