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

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import bubble from "../../images/bubble.gif";
import diver from "../../images/diver.png";
import seal from "../../images/seal.gif";
import zotpals from "../../images/zotpals.png";
import zotpals1 from "../../images/zotpals1.png";
import zotpals2 from "../../images/zotpals2.png";
import zotpals3 from "../../images/zotpals3.png";
import zotpals4 from "../../images/zotpals4.png";
import zotpals5 from "../../images/zotpals5.png";
import zotpals_email from "../../images/zotpals_email.png";

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
            <a href="#zotpals" style={{ textDecoration: "none !important" }}>
              1. ZotPals
            </a>
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

      <div className="project-1" id="zotpals">
        <div className="project-1-main">
          <h1 className="project-1-title">Zotpals</h1>
          <div className="project-description">
            <p>1st Place Winning Web Application at UCI Webjam 2022.</p>
            <p>
              • A web application that provides a medium for users to list items
              they no longer need, borrow items they desire, and browse items
              for things they may need without the hassle of “having a
              relationship”.
            </p>
          </div>
        </div>

        <Carousel showThumbs={false} width="60%">
          <div>
            <img src={zotpals1} />
            <p className="legend">Landing Page</p>
          </div>
          <div>
            <img src={zotpals2} />
            <p className="legend">
              Where user explore products (From newest to oldest)
            </p>
          </div>
          <div>
            <img src={zotpals3} />
            <p className="legend">Product information with comment box</p>
          </div>
          <div>
            <img src={zotpals4} />
            <p className="legend">User is able to post item</p>
          </div>
          <div>
            <img src={zotpals_email} />
            <p className="legend">
              Send the email to the owner to confirm borrow.
            </p>
          </div>
          <div>
            <img src={zotpals5} />
            <p className="legend">
              Comment section where people can comment under the product
            </p>
          </div>
        </Carousel>
      </div>
    </>
  );
}
