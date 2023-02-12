import React from "react";
import profile from "../images/profile.svg";
import projects from "../images/projects.svg";
import comp from "../images/comp.svg";
import achievement from "../images/achievement.svg";
import "./DesktopApp.css";

export default function DesktopApp() {
  return (
    <div className="desktop-app">
      <div>
        <img className="desktop-logo" src={profile} alt="" />
        <h2>Profile</h2>
      </div>
      <div>
        <img className="desktop-logo" src={projects} alt="" />
        <h2>Projects</h2>
      </div>
      <div>
        <img className="desktop-logo" src={achievement} alt="" />
        <h2>Achievement</h2>
      </div>
      <div>
        <img className="desktop-logo" src={comp} alt="" />
        <h2>My Computer</h2>
      </div>
    </div>
  );
}
