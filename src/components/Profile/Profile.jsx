import React, { Component } from "react";
import "./Profile.style.css";
import Bio from "./Bio";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";

export default class Profile extends Component {
  // Custom Jason Data
  person = {
    name: "Abdul Hay",
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, voluptatem?",
    skills: ["JavaScript", "WordPress", "ReactJS"],
    socialMedia: [
      {
        mediaName: "Facebook",
        link: "www.facebook.com",
      },
      {
        mediaName: "Twitter",
        link: "www.twitter.com",
      },
      {
        mediaName: "LinkedIn",
        link: "www.linkedin.com",
      },
      {
        mediaName: "Instragram",
        link: "www.instragram.com",
      },
    ],
  };

  render() {
    return (
      <div className="profile">
        <Bio name={this.person.name} title={this.person.title} />
        <Skills skills={this.person.skills} />
        <SocialLinks socialMedia={this.person.socialMedia} />
      </div>
    );
  }
}
