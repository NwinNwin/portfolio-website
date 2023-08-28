import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import bubble from "../../images/bubble.gif";
import seal from "../../images/seal.gif";

import zotpals1 from "../../images/zotpals1.png";
import zotpals2 from "../../images/zotpals2.png";
import zotpals3 from "../../images/zotpals3.png";
import zotpals4 from "../../images/zotpals4.png";
import zotpals5 from "../../images/zotpals5.png";
import github from "../../images/github.svg";
import school from "../../images/school.png";

import havefun1 from "../../images/havefun1.png";
import havefun2 from "../../images/havefun2.png";
import havefun4 from "../../images/havefun4.png";
import havefun5 from "../../images/havefun5.png";

import zelp1 from "../../images/zelp1.png";
import zelp2 from "../../images/zelp2.png";

import ttt_logo from "../../images/ttt_logo.png";
import ttt1 from "../../images/ttt1.png";
import ttt2 from "../../images/ttt2.png";
import ttt3 from "../../images/ttt3.png";
import ttt4 from "../../images/ttt4.png";

import comp from "../../images/comp.svg";
import devpost_logo from "../../images/devpost_logo.png";

import ctc from "../../images/ctc.webp";
import antalert from "../../images/antalert.png";
import morep from "../../images/morep.png";
import moreproj from "../../images/moreproj.gif";

import zotpals_text from "../../images/zotpals_text.png";
import zotpals_logo from "../../images/zotpals_logo.png";
import havefun_text from "../../images/havefun_text.png";
import havefun_logo from "../../images/havefun_logo.png";
import zelp_text from "../../images/zelp_text.png";
import zelp_logo from "../../images/zelp_logo.png";
import tttt_text from "../../images/tttt_text.png";

import zotnfound_1 from "../../images/zotnfound_1.png";
import zotnfound_3 from "../../images/zotnfound_3.png";
import zotnfound_4 from "../../images/zotnfound_4.png";
import zotnfound_5 from "../../images/zotnfound_5.png";

import zotnfound from "../../images/zotnfound.png";
import zotnfound_logo from "../../images/zotnfound_logo.png";
import mp from "../../images/mp.png";

import "./ProjectPage.css";

export default function ProjectPage() {
  return (
    <>
      <div>
        <h1 className="project-greeting">Welcome to my Projects!</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <img className="bubble" src={bubble} alt="bubble" />
            <img className="seal" src={seal} alt="seal" />
            <img className="bubble" src={bubble} alt="bubble" />
          </div>
          <div className="project-table-content">
            <a href="#zotnfound" style={{ textDecoration: "none !important" }}>
              1. ZotnFound
            </a>

            <div>
              <a href="#zotpals" style={{ textDecoration: "none !important" }}>
                2. ZotPals
              </a>
            </div>

            <div>
              <a href="#havefun" style={{ textDecoration: "none !important" }}>
                3. HaveFun
              </a>
            </div>
            <div>
              <a href="#zelp" style={{ textDecoration: "none !important" }}>
                4. Zelp
              </a>
            </div>
            <div>
              <a
                href="#tictactoe"
                style={{ textDecoration: "none !important" }}
              >
                5. TicTacToe+
              </a>
            </div>

            <div>
              <a href="#mp" style={{ textDecoration: "none !important" }}>
                6. More Projects
              </a>
            </div>
          </div>
          <div>
            <img className="bubble" src={bubble} alt="alt1" />
            <img className="seal" src={seal} alt="alt2" />
            <img className="bubble" src={bubble} alt="alt3" />
          </div>
        </div>
      </div>

      {/* ZotnFound */}
      <div className="project-0" id="zotnfound">
        <Carousel
          className="project-thumbnail project-2-color"
          showThumbs={false}
        >
          <div>
            <img src={zotnfound_3} alt="zotpals1" />
          </div>
          <div>
            <img src={zotnfound_1} alt="zotpals1" />
          </div>
          <div>
            <img src={zotnfound_4} alt="zotpals1" />
          </div>
          <div>
            <img src={zotnfound_5} alt="zotpals1" />
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          <img className="proj-text" src={zotnfound} alt="alt8" />
          <div
            className="project-description"
            style={{
              background: "#064a04",
              boxShadow: "0 0 30px 5px rgb(216, 216, 140)",
            }}
          >
            <img className="description-img" src={zotnfound_logo} alt="alt9" />

            <div
              style={{
                marginBottom: "5%",
              }}
            >
              <p className="award-text">
                Best Overall [Runner Up] @VenusHack 2023
              </p>
            </div>
            <p>
              • A platform designed for UCI students, allowing them to
              effortlessly locate and recover lost or found items, ensuring
              their safe return.
            </p>
            <div className="btn-div">
              <a
                href="https://github.com/stevem-zhou/ZotnFound"
                target="_blank"
                rel="noreferrer"
              >
                <div className="github-btn">
                  <img className="github" src={github} alt="alt0" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>

              <a href="https://zotnfound.com" target="_blank" rel="noreferrer">
                <div className="devpost-btn">
                  <p>🌐&nbsp;Website</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ZOTPALS */}
      <div className="project-1" id="zotpals">
        {/* <img className="project-thumbnail" src={zotpals2} /> */}

        <Carousel className="project-thumbnail" showThumbs={false}>
          <div>
            <img src={zotpals1} alt="zotpals1" />
          </div>
          <div>
            <img src={zotpals2} alt="zotpals1" />
          </div>
          <div>
            <img src={zotpals3} alt="zotpals1" />
          </div>
          <div>
            <img src={zotpals4} alt="zotpals1" />
          </div>
          <div>
            <img src={zotpals5} alt="zotpals1" />
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          {/* <h1 className="project-1-title">Zotpals</h1> */}
          <img className="proj-text" src={zotpals_text} alt="alt4" />
          <div className="project-description">
            <img className="description-img" src={zotpals_logo} alt="alt5" />

            <div
              style={{
                marginBottom: "5%",
              }}
            >
              <p className="award-text">1ST Place @ UCI Webjam 2022.</p>
            </div>
            <p>
              • A web application that allows users to list, borrow and browse
              items for things they may need without the hassle of “having a
              relationship”.
            </p>
            <div className="btn-div">
              <a
                href="https://github.com/stevem-zhou/ZotPals"
                target="_blank"
                rel="noreferrer"
              >
                <div className="github-btn">
                  <img className="github" src={github} alt="alt6" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>

              <a
                href="https://www.cs.uci.edu/ics-student-council-announces-winning-projects-from-webjam-2022/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="uci-btn">
                  <img className="github" src={school} alt="alt7" />
                  <p>&nbsp;UCI</p>
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
            <img src={havefun1} alt="zotpals1" />
          </div>
          <div>
            <img src={havefun2} alt="zotpals1" />
          </div>
          <div>
            <img src={havefun4} alt="zotpals1" />
          </div>
          <div>
            <img src={havefun5} alt="zotpals1" />
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          <img className="proj-text" src={havefun_text} alt="alt8" />
          <div
            className="project-description"
            style={{
              background: "rgb(140, 46, 46)",
              boxShadow: "0 0 30px 5px rgb(216, 216, 140)",
            }}
          >
            <img
              className="description-img havefun-logo"
              src={havefun_logo}
              alt="alt9"
            />

            <div
              style={{
                marginBottom: "5%",
              }}
            >
              <p className="award-text">"Best Meme Hack" @ HACKUCI 2023</p>
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
                rel="noreferrer"
              >
                <div className="github-btn">
                  <img className="github" src={github} alt="alt0" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>

              <a
                href="https://devpost.com/software/havefun"
                target="_blank"
                rel="noreferrer"
              >
                <div className="devpost-btn">
                  <img className="github" src={devpost_logo} alt="alt11" />
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
            <img src={zelp1} alt="zotpals1" />
          </div>
          <div>
            <img src={zelp2} alt="zotpals1" />
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          <img className="proj-text zelp-text" src={zelp_text} alt="alt12" />
          <div className="project-description">
            <div>
              <img className="zelp-img" src={zelp_logo} alt="alt13" />
            </div>

            <div
              style={{
                marginBottom: "5%",
              }}
            >
              <p className="award-text">Participated @ ZotHacks 2021</p>
            </div>
            <p>
              • A website that allows students to mark locations on campus of
              utilities, add caption reviews of each location marked on the map,
              and filter to one of the essentials that they would like to view.
            </p>
            <div className="btn-div">
              <a
                href="https://github.com/Bryan-Phung/zelp"
                target="_blank"
                rel="noreferrer"
              >
                <div className="github-btn">
                  <img className="github" src={github} alt="alt14" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>

              <a
                href="https://devpost.com/software/zelp"
                target="_blank"
                rel="noreferrer"
              >
                <div className="devpost-btn">
                  <img className="github" src={devpost_logo} alt="alt15" />
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
            <img src={ttt2} alt="zotpals1" />
          </div>
          <div>
            <img src={ttt4} alt="zotpals1" />
          </div>
          <div>
            <img src={ttt3} alt="zotpals1" />
          </div>
          <div>
            <img src={ttt1} alt="zotpals1" />
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          <img className="proj-text" src={tttt_text} alt="alt16" />
          <div
            className="project-description"
            style={{ background: "rgb(151, 28, 28)" }}
          >
            <img
              className="description-img ttt-img"
              src={ttt_logo}
              alt="alt17"
            />
            <div
              style={{
                marginBottom: "5%",
              }}
            >
              <p className="award-text">&nbsp;Personal Project</p>
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
                rel="noreferrer"
              >
                <div className="github-btn">
                  <img className="github" src={github} alt="alt18" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>

              <a
                href="https://tic-tac-toe-plus.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="website-btn">
                  <img className="github" src={comp} alt="alt19" />
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
            <img src={antalert} alt="zotpals1" />
            <p className="legend">AntAlert</p>
          </div>
          <div>
            <img src={ctc} alt="zotpals1" />
            <p className="legend">CTC Wasteless</p>
          </div>
          <div>
            <img src={morep} alt="zotpals1" />
            <p className="legend">Learning Projects</p>
          </div>
        </Carousel>
        {/* <p className="legend">Landing Page</p> */}

        <div className="project-1-main">
          <img
            className="proj-text more-proj"
            style={{ width: "90%" }}
            src={mp}
            alt="alt10"
          />
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
              <img className="description-img" src={moreproj} alt="alt100" />
            </div>
            <p>
              I am a self-taught web developer and I learn to code in my spare
              time. Come to check out my progress on GitHub!
            </p>
            <div className="btn-div">
              <a
                href="https://github.com/NwinNwin"
                target="_blank"
                rel="noreferrer"
              >
                <div className="github-btn">
                  <img className="github" src={github} alt="alt100" />
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
