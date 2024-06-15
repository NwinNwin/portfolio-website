import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import bubble from "../../images/bubble.gif";
import seal from "../../images/seal.gif";

import zotpals1 from "../../images/zotpals1.png";
import zotpals2 from "../../images/zotpals2.png";
import zotpals3 from "../../images/zotpals3.png";
import zotpals4 from "../../images/zotpals4.png";
import zotpals5 from "../../images/zotpals5.png";
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

import devpost_logo from "../../images/devpost_logo.png";

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
import globe from "../../images/globe.svg";

import "./ProjectPage.css";
import Project from "./Project";

export default function ProjectPage() {
  const projects = [
    {
      id: "zotnfound",
      images: [
        { src: zotnfound_3, alt: "zotnfound1" },
        { src: zotnfound_1, alt: "zotnfound2" },
        { src: zotnfound_4, alt: "zotnfound3" },
        { src: zotnfound_5, alt: "zotnfound4" },
      ],
      titleImage: zotnfound,
      logoImage: zotnfound_logo,
      websiteImage: globe,
      awardText: "Best Overall [Runner Up] @VenusHack 2023",
      description:
        "A platform designed for UCI students, allowing them to effortlessly locate and recover lost or found items, ensuring their safe return.",
      githubLink: "https://github.com/stevem-zhou/ZotnFound",
      websiteLink: "https://zotnfound.com",
      backgroundColor: "#064a04",
      boxShadow: "0 0 30px 5px rgb(216, 216, 140)",
      className: "project-0",
    },
    {
      id: "zotpals",
      images: [
        { src: zotpals1, alt: "zotpals1" },
        { src: zotpals2, alt: "zotpals2" },
        { src: zotpals3, alt: "zotpals3" },
        { src: zotpals4, alt: "zotpals4" },
        { src: zotpals5, alt: "zotpals5" },
      ],
      titleImage: zotpals_text,
      logoImage: zotpals_logo,
      websiteImage: school,
      awardText: "1ST Place @ UCI Webjam 2022.",
      description:
        "A web application that allows users to list, borrow and browse items for things they may need without the hassle of “having a relationship”.",
      githubLink: "https://github.com/stevem-zhou/ZotPals",
      websiteLink:
        "https://www-dev.ics.uci.edu/2022/12/02/ics-student-council-announces-winning-projects-from-webjam-2022/",
      className: "project-1",
    },
    {
      id: "havefun",
      images: [
        { src: havefun1, alt: "havefun1" },
        { src: havefun2, alt: "havefun2" },
        { src: havefun4, alt: "havefun4" },
        { src: havefun5, alt: "havefun5" },
      ],
      titleImage: havefun_text,
      logoImage: havefun_logo,
      websiteImage: devpost_logo,
      awardText: '"Best Meme Hack" @ HACKUCI 2023',
      description:
        "A social platform that emphasizes having fun and encourages its users to share their moments of enjoyment, participate in daily joke challenges and create memes with a built-in generator.",
      githubLink: "https://github.com/2mnguyen1/HackUCI-HaveFun",
      websiteLink: "https://devpost.com/software/havefun",
      backgroundColor: "rgb(140, 46, 46)",
      boxShadow: "0 0 30px 5px rgb(216, 216, 140)",
      className: "project-2",
    },
    {
      id: "zelp",
      images: [
        { src: zelp1, alt: "zelp1" },
        { src: zelp2, alt: "zelp2" },
      ],
      titleImage: zelp_text,
      logoImage: zelp_logo,
      websiteImage: devpost_logo,
      awardText: "Participated @ ZotHacks 2021",
      description:
        "A website that allows students to mark locations on campus of utilities, add caption reviews of each location marked on the map, and filter to one of the essentials that they would like to view.",
      githubLink: "https://github.com/Bryan-Phung/zelp",
      websiteLink: "https://devpost.com/software/zelp",
      className: "project-3",
    },
    {
      id: "tictactoe",
      images: [
        { src: ttt2, alt: "ttt2" },
        { src: ttt4, alt: "ttt4" },
        { src: ttt3, alt: "ttt3" },
        { src: ttt1, alt: "ttt1" },
      ],
      titleImage: tttt_text,
      logoImage: ttt_logo,
      websiteImage: globe,
      awardText: "Personal Project",
      description:
        "A Tic-Tac-Toe web game that features a clean and intuitive interface making it easy for players of all skill levels to jump right into the action. There are three modes: AI, multiplayer, and offline.",
      githubLink: "https://github.com/NwinNwin/Tic-Tac-Toe-PLUS",
      websiteLink: "https://tic-tac-toe-plus.netlify.app/",
      backgroundColor: "rgb(140, 46, 46)",
      className: "project-3 project-4",
    },
  ];

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
            {projects.map((project, index) => (
              <div key={index}>
                <a
                  href={`#${project.id}`}
                  style={{ textDecoration: "none !important" }}
                >
                  {index + 1}.{" "}
                  {project.id.charAt(0).toUpperCase() + project.id.slice(1)}
                </a>
              </div>
            ))}
          </div>
          <div>
            <img className="bubble" src={bubble} alt="bubble" />
            <img className="seal" src={seal} alt="seal" />
            <img className="bubble" src={bubble} alt="bubble" />
          </div>
        </div>
      </div>

      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </>
  );
}
