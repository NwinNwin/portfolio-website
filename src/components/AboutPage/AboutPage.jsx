import React, { useState } from "react";
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar, GroupBox, TreeLeaf, TreeView, ColorInput } from "react95";

import myselfpixel from "../../images/myselfpixel.png";
import "./AboutPage.css";
import school from "../../images/school.png";

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

          <div className="all-posts">
            <h3>News Feed</h3>
            <div className="user-post">
              <input
                type="text"
                style={{
                  width: "90%",
                  height: "5.5vh",
                }}
                defaultValue="What's on your mind?"
              />
              <div className="user-post-func">
                <p>add photos &nbsp; • &nbsp; tags friends &nbsp; • &nbsp; feeling/activity</p>
                <button className="post-button">Post message</button>
              </div>
            </div>

            <div className="postings">
              <div className="post-owner">
                <img className="pfp-post" src={myselfpixel} alt="pfp" />
                <div
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  <p>Dang Nguyen </p>
                  <p>August, 2021 🌎</p>
                </div>
              </div>

              <div className="description">
                <p>Started School at UCI 🎓</p>
              </div>
              <div style={{ margin: "2% 0", textAlign: "center", background: "white", padding: "3%" }}>
                <img className="post-pic" src={school} alt="school" />
              </div>
              <p>Like &nbsp; • &nbsp; Comment &nbsp; • &nbsp; Share</p>
            </div>
          </div>

          <div className="info">
            <div className="info-box">hi</div>
          </div>
        </div>
      </div>
    </>
  );
}
