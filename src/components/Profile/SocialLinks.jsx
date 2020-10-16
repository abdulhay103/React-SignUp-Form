import React from "react";

const SocialLinks = ({ socialMedia }) => {
  const SocialMedia = socialMedia.map((social, index) => (
    <li key={index}>
      <a href={social.link}>{social.mediaName}</a>
    </li>
  ));
  return (
    <div>
      <h3>Contact With Me</h3>
      <ul>{SocialMedia}</ul>
    </div>
  );
};

export default SocialLinks;
