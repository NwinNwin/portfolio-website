import React from "react";
import profile from "../../images/profile.svg";
import projects from "../../images/projects.svg";
import comp from "../../images/comp.svg";
import ebay from "../../images/ebay.png";
import "./DesktopApp.css";
import "98.css";
import DangNguyen_resume from "../../images/DangNguyen_resume.pdf";

export default function DesktopApp({
  setIsOpen,
  setIsProjectOpen,
  setIsMarketOpen,
}) {
  return (
    <div className="desktop-app">
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <img className="desktop-logo" src={profile} alt="" />
        <p>Profile</p>
      </div>
      <div
        onClick={() => {
          setIsProjectOpen(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <img className="desktop-logo" src={projects} alt="" />
        <p>Projects</p>
      </div>
      <div
        onClick={() => {
          setIsMarketOpen(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <img className="desktop-logo" src={ebay} alt="" />
        <p>Ebay</p>
      </div>

      <a href={DangNguyen_resume} target="_blank">
        <div style={{ cursor: "pointer" }}>
          <img className="desktop-logo" src={comp} alt="" />
          <p>Resume</p>
        </div>
      </a>
    </div>
  );
}
