import React from "react";

function Skills({ skills }) {
  const PersonSkills = skills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));
  return (
    <div>
      <h3>Skills</h3>
      <ul>{PersonSkills}</ul>
    </div>
  );
}

export default Skills;
