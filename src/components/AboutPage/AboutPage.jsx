import React, { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
  GroupBox,
  TreeLeaf,
  TreeView,
  ColorInput,
} from "react95";

import myselfpixel from "../../images/myselfpixel.png";
import "./AboutPage.css";
import AboutPost from "./AboutPosts";
import DangNguyen_resume from "../../images/DangNguyen_resume.pdf";

export default function AboutPage({
  setIsProjectOpen,
  setIsMarketOpen,
  setContactOpen,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <img src={welcome} alt="" /> */}

      <div>
        <div className="about-bg-pic">
          <h1>[ dang_nguyen ]</h1>
        </div>
        <div className="about-content">
          <div>
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

                <a href={DangNguyen_resume} target="_blank">
                  <p style={{ cursor: "pointer" }}>Resume</p>
                </a>
                <p
                  onClick={() => {
                    setIsMarketOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Marketplace
                </p>
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
                    Python &nbsp; • &nbsp; Javascript &nbsp; • &nbsp; C++
                  </p>
                </div>

                <div className="info-title-box">
                  <p className="info-title">Frontend:</p>
                  <p className="info-text">HTML/CSS • ReactJS</p>
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
                    Git • GitHub • Rest API • Postman • VSCode • Eclipse
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
