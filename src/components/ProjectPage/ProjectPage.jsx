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
import github from "../../images/github.svg";
import school from "../../images/school.png";

import havefun1 from "../../images/havefun1.png";
import havefun2 from "../../images/havefun2.png";
import havefun4 from "../../images/havefun4.png";
import havefun5 from "../../images/havefun5.png";

import zelp1 from "../../images/zelp1.png";
import zelp2 from "../../images/zelp2.png";

import ttt1 from "../../images/ttt1.png";
import ttt2 from "../../images/ttt2.png";
import ttt3 from "../../images/ttt3.png";
import ttt4 from "../../images/ttt4.png";

import comp from "../../images/comp.svg";
import tomato from "../../images/tomato.gif";

import ctc from "../../images/ctc.webp";
import antalert from "../../images/antalert.png";
import morep from "../../images/morep.png";
import moreproj from "../../images/moreproj.gif";

import zotpals_text from "../../images/zotpals_text.png";
import havefun_text from "../../images/havefun_text.png";
import zelp_text from "../../images/zelp_text.png";
import tttt_text from "../../images/tttt_text.png";
import mp from "../../images/mp.png";

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
            <div>
              <a
                href="#tictactoe"
                style={{ textDecoration: "none !important" }}
              >
                4. TicTacToe+
              </a>
            </div>

            <div>
              <a href="#mp" style={{ textDecoration: "none !important" }}>
                5. More Projects
              </a>
            </div>
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
        {/* <img className="project-thumbnail" src={zotpals2} /> */}

        <Carousel className="project-thumbnail" showThumbs={false}>
          <div>
            <img src={zotpals1} />
          </div>
          <div>
            <img src={zotpals2} />
          </div>
          <div>
            <img src={zotpals3} />
          </div>
          <div>
            <img src={zotpals4} />
          </div>
          <div>
            <img src={zotpals5} />
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          {/* <h1 className="project-1-title">Zotpals</h1> */}
          <img src={zotpals_text} alt="" />
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
              <img style={{ width: "3.5vw" }} src={medal} alt="" />
              <p>1ST Place @ UCI Webjam 2022.</p>
            </div>
            <p>
              • A web application that allows users to list, borrow and browse
              items for things they may need without the hassle of “having a
              relationship”.
            </p>
            <div className="btn-div">
              <a href="https://github.com/stevem-zhou/ZotPals" target="_blank">
                <div className="github-btn">
                  <img className="github" src={github} alt="" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>

              <a
                href="https://www.cs.uci.edu/ics-student-council-announces-winning-projects-from-webjam-2022/"
                target="_blank"
              >
                <div className="uci-btn">
                  <img className="github" src={school} alt="" />
                  <p>&nbsp;UCI ICS</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HAVEFUN */}
      <div className="project-2" id="havefun">
        <Carousel
          className="project-thumbnail project-2-color"
          showThumbs={false}
        >
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
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          <img src={havefun_text} alt="" />
          <div
            className="project-description"
            style={{
              background: "rgb(140, 46, 46)",
              boxShadow: "0 0 30px 5px rgb(216, 216, 140)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "5%",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "3.5vw" }} src={medalhack} alt="" />
              <p>"Best Meme Hack" @ HACKUCI 2023</p>
            </div>
            <p>
              • A social platform that emphasizes having fun and encourages its
              users to share their moments of enjoyment, participate in daily
              joke challenges and create memes with a built-in generator.
            </p>
            <div className="btn-div">
              <a
                href="https://github.com/2mnguyen1/HackUCI-HaveFun"
                target="_blank"
              >
                <div className="github-btn">
                  <img className="github" src={github} alt="" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>

              <a href="https://devpost.com/software/havefun" target="_blank">
                <div className="uci-btn">
                  <img className="github" src={school} alt="" />
                  <p>&nbsp;DevPost</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-3" id="zelp">
        <Carousel className="project-thumbnail" showThumbs={false}>
          <div>
            <img src={zelp1} />
          </div>
          <div>
            <img src={zelp2} />
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          <img src={zelp_text} alt="" />
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
              <img style={{ width: "3.5vw" }} src={tomato} alt="" />
              <p>Participated @ ZotHacks 2021</p>
            </div>
            <p>
              • A website that allows students to mark locations on campus of
              utilities, add caption reviews of each location marked on the map,
              and filter to one of the essentials that they would like to view.
            </p>
            <div className="btn-div">
              <a href="https://github.com/Bryan-Phung/zelp" target="_blank">
                <div className="github-btn">
                  <img className="github" src={github} alt="" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>

              <a href="https://devpost.com/software/zelp" target="_blank">
                <div className="uci-btn">
                  <img className="github" src={school} alt="" />
                  <p>&nbsp;DevPost</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-3 project-4" id="tictactoe">
        <Carousel className="project-thumbnail" showThumbs={false}>
          <div>
            <img src={ttt2} />
          </div>
          <div>
            <img src={ttt4} />
          </div>
          <div>
            <img src={ttt3} />
          </div>
          <div>
            <img src={ttt1} />
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          <img src={tttt_text} alt="" />
          <div
            className="project-description"
            style={{ background: "rgb(151, 28, 28)" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "5%",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "1.5vw" }} src={comp} alt="" />
              <p>&nbsp;Personal Project</p>
            </div>
            <p>
              A Tic-Tac-Toe web game that features a clean and intuitive
              interface making it easy for players of all skill levels to jump
              right into the action. There are three modes: AI, multiplayer, and
              offline.
            </p>
            <div className="btn-div">
              <a
                href="https://github.com/NwinNwin/Tic-Tac-Toe-PLUS"
                target="_blank"
              >
                <div className="github-btn">
                  <img className="github" src={github} alt="" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>

              <a href="https://tic-tac-toe-plus.netlify.app/" target="_blank">
                <div className="website-btn">
                  <img className="github" src={comp} alt="" />
                  <p>&nbsp;Website</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-3 project-5" id="mp">
        <Carousel className="project-thumbnail" showThumbs={false}>
          <div>
            <img src={antalert} />
            <p className="legend">AntAlert</p>
          </div>
          <div>
            <img src={ctc} />
            <p className="legend">CTC Wasteless</p>
          </div>
          <div>
            <img src={morep} />
            <p className="legend">Learning Projects</p>
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          <img style={{ width: "90%" }} src={mp} alt="" />
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
              <img style={{ width: "5vw" }} src={moreproj} alt="" />
            </div>
            <p>
              I am a self-taught web developer and I learn to code in my spare
              time. Come to check out my progress on GitHub!
            </p>
            <div className="btn-div">
              <a href="https://github.com/NwinNwin" target="_blank">
                <div className="github-btn">
                  <img className="github" src={github} alt="" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
