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
import welcome from "../../images/welcomegif.gif";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  const categories = [
    {
      id: "projects",
      label: "Projects",
      icon: <>💻</>,
      items: [
        {
          id: "zotpals",
          label: "ZotPals",
          icon: <>🛒</>,
        },
        {
          id: "havefun",
          label: "HaveFun",
          icon: <>😀</>,
        },
        {
          id: "tictactoeplus",
          label: "Tic-Tac-Toe➕",
          icon: <>❌</>,
        },
      ],
    },
    {
      id: "skills",
      label: "Skills",
      icon: <>⚒️</>,
      items: [
        {
          id: "python",
          label: "Python",
        },
        {
          id: "c",
          label: "C++",
        },

        {
          id: "react",
          label: "Web Dev",
          items: [
            {
              id: "javascript",
              label: "Javascript",
            },
            {
              id: "react",
              label: "React JS",
            },
            {
              id: "html",
              label: "HTML/CSS",
            },
            {
              id: "nosql",
              label: "NoSQL",
            },
          ],
        },
      ],
    },
  ];
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
              <p>
                add photos &nbsp; • &nbsp; tags friends &nbsp; • &nbsp;
                feeling/activity
              </p>
              <button className="post-button">Post message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
