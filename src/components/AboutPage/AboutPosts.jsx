import React, { useState } from "react";
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar, GroupBox, TreeLeaf, TreeView, ColorInput } from "react95";

import myselfpixel from "../../images/myselfpixel.png";
import "./AboutPage.css";
import school from "../../images/school.png";
import py from "../../images/py.gif";
import first_hackathon from "../../images/first_hackathon.jpg";
import zelp from "../../images/zelp.png";
import pter from "../../images/pter.png";
import venus from "../../images/venus.jpg";

export default function AboutPost() {
  return (
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
          <p>UCI🎓: Major in Computer Science, Class of 2025</p>
        </div>
        <div style={{ margin: "2% 0", textAlign: "center", background: "white", padding: "3%" }}>
          <img className="post-pic" src={school} alt="school" />
        </div>
        <p>Like &nbsp; • &nbsp; Comment &nbsp; • &nbsp; Share</p>
      </div>

      {/* python */}
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
          <p>Python: My first language &#40; ICS-31 &#41;</p>
        </div>
        <div style={{ margin: "2% 0", textAlign: "center", background: "white", padding: "3%" }}>
          <img className="post-pic" src={py} alt="school" />
        </div>
        <p>Like &nbsp; • &nbsp; Comment &nbsp; • &nbsp; Share</p>
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
            <p>November 20, 2021 🌎</p>
          </div>
        </div>

        <div className="description">
          <p>FIRST HACKATHON!!!!</p>
          <p>learn more...</p>
        </div>
        <div style={{ margin: "2% 0", textAlign: "center", background: "white", padding: "3%" }}>
          <img className="post-pic-big" src={first_hackathon} alt="school" />
          <img className="post-pic-big" src={zelp} alt="school" />
        </div>
        <p>Like &nbsp; • &nbsp; Comment &nbsp; • &nbsp; Share</p>
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
            <p>May 20, 2022 🌎</p>
          </div>
        </div>

        <div className="description">
          <p>2ND Hackathon</p>
        </div>
        <div style={{ margin: "2% 0", textAlign: "center", background: "white", padding: "3%" }}>
          <img className="post-pic-md" src={venus} alt="school" />
          <img className="post-pic-big" src={pter} alt="school" />
        </div>
        <p>Like &nbsp; • &nbsp; Comment &nbsp; • &nbsp; Share</p>
      </div>
    </div>
  );
}
