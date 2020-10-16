import React from "react";

const Bio = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.title}</p>
    </div>
  );
};

export default Bio;
