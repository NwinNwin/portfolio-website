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
import medal from "../../images/medal.png";
import medalhack from "../../images/medalhack.png";

import havefun1 from "../../images/havefun1.png";
import havefun2 from "../../images/havefun2.png";
import havefun4 from "../../images/havefun4.png";
import havefun5 from "../../images/havefun5.png";

import zelp1 from "../../images/zelp1.png";
import zelp2 from "../../images/zelp2.png";

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
            <div>
              <a href="#havefun" style={{ textDecoration: "none !important" }}>
                2. HaveFun
              </a>
            </div>
            <div>
              <a href="#zelp" style={{ textDecoration: "none !important" }}>
                3. Zelp
              </a>
            </div>

            <h1>4. TicTacToe+</h1>
            <h1>5. AntAlert</h1>
            <h1>6. Learning Projects</h1>
          </div>
          <div>
            <img src={bubble} alt="" />
            <img src={seal} alt="" />
            <img src={bubble} alt="" />
          </div>
        </div>
      </div>

      {/* ZOTPALS */}
      <div className="project-1" id="zotpals">
        <div className="project-1-main">
          <h1 className="project-1-title">Zotpals</h1>
          <div className="project-description">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "5%",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "5vw" }} src={medal} alt="" />
              <p>1st Place @ UCI Webjam 2022.</p>
            </div>

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
            {/* <p className="legend">Landing Page</p> */}
          </div>
          <div>
            <img src={zotpals2} />
            {/* <p className="legend">
              Where user explore products (From newest to oldest)
            </p> */}
          </div>
          <div>
            <img src={zotpals3} />
            {/* <p className="legend">Product information with comment box</p> */}
          </div>
          <div>
            <img src={zotpals4} />
            {/* <p className="legend">User is able to post item</p> */}
          </div>
          <div>
            <img src={zotpals5} />
            {/* <p className="legend">
              Comment section where people can comment under the product
            </p> */}
          </div>
        </Carousel>
      </div>

      {/* HAVEFUN */}
      <div className="project-2" id="havefun">
        <div className="project-1-main">
          <h1 className="project-1-title">Zelp</h1>
          <div className="project-2-description">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "5%",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "5vw" }} src={medalhack} alt="" />
              <p>"Best Meme Hack" @ HACKUCI 2023</p>
            </div>

            <p>
              • A social platform that emphasizes having fun and encourages its
              users to share their moments of enjoyment, participate in daily
              joke challenges and create memes with a built-in generator.
            </p>
          </div>
        </div>

        <Carousel showThumbs={false} width="60%">
          <div>
            <img src={havefun1} />
          </div>
          <div>
            <img src={havefun2} />
          </div>
          <div>
            <img src={havefun4} />
          </div>
          <div>
            <img src={havefun5} />
          </div>
        </Carousel>
      </div>

      {/* Zelp */}
      <div className="project-3" id="zelp">
        <div className="project-1-main">
          <h1 className="project-3-title">Zelp</h1>
          <div className="project-3-description">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "5%",
                justifyContent: "center",
              }}
            >
              <p>Participated in ZotHacks 2021</p>
            </div>

            <p>
              • A website that allows students to mark locations on campus of
              utilities, add caption reviews of each location marked on the map,
              and filter to one of the essentials that they would like to view.
            </p>
          </div>
        </div>
        <Carousel showThumbs={false} width="60%">
          <div>
            <img src={zelp1} />
          </div>
          <div>
            <img src={zelp2} />
          </div>
        </Carousel>
      </div>

      {/* TicTacToe+ */}
      <div className="project-3" id="zelp">
        <div className="project-1-main">
          <h1 className="project-3-title">TicTacToe+</h1>
          <div className="project-3-description">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "5%",
                justifyContent: "center",
              }}
            >
              <p>Participated in ZotHacks 2021</p>
            </div>

            <p>
              • A website that allows students to mark locations on campus of
              utilities, add caption reviews of each location marked on the map,
              and filter to one of the essentials that they would like to view.
            </p>
          </div>
        </div>
        <Carousel showThumbs={false} width="60%">
          <div>
            <img src={zelp1} />
          </div>
          <div>
            <img src={zelp2} />
          </div>
        </Carousel>
      </div>
    </>
  );
}
