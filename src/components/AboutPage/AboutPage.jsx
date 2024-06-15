import React from "react";
import { GroupBox } from "react95";

import myselfpixel from "../../images/myselfpixel.png";
import "./AboutPage.css";
import AboutPost from "./AboutPosts";
import DangNguyen_resume from "../../images/DangNguyen_resume.pdf";

export default function AboutPage({
  setIsProjectOpen,
  setIsMarketOpen,
  setContactOpen,
}) {
  return (
    <>
      <div>
        <div className="about-bg-pic">
          <h1>[ dang_nguyen ]</h1>
        </div>
        <div className="about-content">
          <div className="group-box-div">
            <GroupBox
              style={{
                marginRight: "30px",
                background: "#e6e6e6",
                color: "black",
              }}
              label="About Me"
            >
              <img className="pfp" src={myselfpixel} alt="" />
              <p className="name">Dang Nguyen</p>

              <div className="about-section">
                <p
                  onClick={() => {
                    setIsProjectOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Projects
                </p>
                <p
                  onClick={() => {
                    setIsMarketOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Marketplace
                </p>
                <a href={DangNguyen_resume} target="_blank" rel="noreferrer">
                  <p style={{ cursor: "pointer" }}>Resume</p>
                </a>
                <p
                  onClick={() => {
                    setContactOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Contact Me
                </p>
              </div>
            </GroupBox>
          </div>

          <AboutPost />

          <div className="info">
            <div className="info-box">
              <p>Information</p>
              <div className="inside-info">
                <p className="info-title">Skills:</p>

                <div className="info-title-box">
                  <p className="info-title">Programming:</p>
                  <p className="info-text">
                    Python &nbsp; • &nbsp; Java &nbsp; • &nbsp; Typescript &nbsp; • &nbsp; C/C++
                  </p>
                </div>

                <div className="info-title-box">
                  <p className="info-title">Frontend:</p>
                  <p className="info-text">
                    {" "}
                    ReactJS • HTML/CSS • React Native
                  </p>
                </div>

                <div className="info-title-box">
                  <p className="info-title">Backend:</p>
                  <p className="info-text">
                    NodeJS • ExpressJS • PostgreSQL • MongoDB • Firebase
                  </p>
                </div>

                <div className="info-title-box">
                  <p className="info-title">Technologies:</p>
                  <p className="info-text">
                    Git • GitHub • AWS • Rest API • Postman • VSCode • Eclipse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
