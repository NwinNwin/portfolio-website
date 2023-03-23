import React, { useState } from "react";
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar, GroupBox, TreeLeaf, TreeView, ColorInput } from "react95";

import myselfpixel from "../../images/myselfpixel.png";
import "./AboutPage.css";
import AboutPost from "./AboutPosts";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <img src={welcome} alt="" /> */}

      <div>
        <div className="about-bg-pic">
          <h1>[ dang_nguyen ]</h1>
        </div>
        <div className="about-content">
          <GroupBox
            style={{
              marginRight: "30px",
              background: "#e6e6e6",
              color: "black",
              height: "50vh",
            }}
            label="About Me"
          >
            <img className="pfp" src={myselfpixel} alt="" />
            <p className="name">Dang Nguyen</p>

            <div className="about-section">
              <p>Projects</p>
              <p>Marketplace</p>
              <p>Photos</p>
            </div>
          </GroupBox>

          <AboutPost />

          <div className="info">
            <div className="info-box">
              <p>Information</p>
              <div className="inside-info">
                <p>Basic Info:</p>
                <p>School:</p>
                <p>Class:</p>
                <p>Major:</p>

                <p>Contact Info:</p>
                <p>Email:</p>
                <p>Linkedin:</p>
                <p>Github:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
