import React from "react";
import profile from "../../images/profile.png";
import projects from "../../images/projects.svg";
import ebay from "../../images/ebay.png";
import resume from "../../images/resume.png";
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
        className="logo-box"
      >
        <img className="desktop-logo" src={profile} alt="" />
        <p>Profile</p>
      </div>
      <div
        onClick={() => {
          setIsProjectOpen(true);
        }}
        style={{ cursor: "pointer" }}
        className="logo-box"
      >
        <img className="desktop-logo" src={projects} alt="" />
        <p>Projects</p>
      </div>
      <div
        onClick={() => {
          setIsMarketOpen(true);
        }}
        style={{ cursor: "pointer" }}
        className="logo-box"
      >
        <img className="desktop-logo" src={ebay} alt="" />
        <p>Ebay</p>
      </div>

      <a href={DangNguyen_resume} target="_blank" rel="noreferrer">
        <div style={{ cursor: "pointer" }} className="logo-box">
          <img className="desktop-logo" src={resume} alt="" />
          <p>Resume</p>
        </div>
      </a>
    </div>
  );
}
