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

import bubble from "../../images/bubble.gif";
import diver from "../../images/diver.png";
import seal from "../../images/seal.gif";
import zotpals from "../../images/zotpals.png";

import "./ProjectPage.css";

export default function ProjectPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <h1 className="project-greeting">Welcome to my Projects</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <img src={bubble} alt="" />
            <img src={seal} alt="" />
            <img src={bubble} alt="" />
          </div>
          <div className="project-table-content">
            <h1>1. ZotPals</h1>
            <h1>2. HaveFun</h1>
            <h1>3. TicTacToe +</h1>
            <h1>4. Zelp</h1>
            <h1>5. 2048 Web Game</h1>
          </div>
          <div>
            <img src={bubble} alt="" />
            <img src={seal} alt="" />
            <img src={bubble} alt="" />
          </div>
        </div>
      </div>

      <div className="project-1">
        <img style={{ width: "300px" }} src={zotpals} alt="" />
        <div style={{ marginLeft: "10%" }}>
          <h1 className="project-1-title">Zotpals</h1>
          <div className="project-description">
            <p>1st Place Winning Web Application at UCI Webjam 2022.</p>
            <p>
              • A web application that provides a medium for users to list items
              they no longer need, borrow items they desire, and browse items
              for things they may need without the hassle of “having a
              relationship” (i.e friendships, etc..).
            </p>

            <p>
              • Contributed as a full-stack developer, developed the web
              application using Express, MongoDB, Nodemailer for the backend and
              React, HTML, CSS, Bootstrap, JS for the frontend.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
