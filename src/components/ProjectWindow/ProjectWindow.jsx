import React, { useState } from "react";
import { Button, Toolbar, Window, WindowContent, WindowHeader } from "react95";
import "../MyWindow/MyWindow.css";
import "./ProjectWindow.css";
import minimize from "../../images/minimize.svg";
import maximize from "../../images/maximize.svg";
import close from "../../images/close.svg";

import Draggable from "react-draggable";
import ProjectPage from "../ProjectPage/ProjectPage";
export default function ProjectWindow({ setIsProjectOpen }) {
  const [isMax, setIsMax] = useState(false);

  return (
    <div
      className={
        !isMax ? "project-window-div window-div" : "window-div max-window-div"
      }
    >
      <Draggable
        bounds={{ top: -70, left: -100, right: 50, bottom: 100 }}
        handle="strong"
        cancel=".btn"
      >
        <Window resizable className={!isMax ? "window" : "window max-window"}>
          <strong className="cursor">
            <WindowHeader className="title-bar">
              <div class="title-bar-text">Project</div>
              <div class="title-bar-controls">
                <Button className="btn">
                  <img className="window-btn" src={minimize} alt="" />
                </Button>
                <Button
                  onClick={() => {
                    setIsMax(!isMax);
                  }}
                  className="btn"
                >
                  <img className="window-btn" src={maximize} alt="" />
                </Button>
                <Button
                  onClick={() => {
                    setIsProjectOpen(false);
                  }}
                  className="btn"
                >
                  <img className="window-btn" src={close} alt="" />
                </Button>
              </div>
            </WindowHeader>
          </strong>
          <Toolbar>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              Edit
            </Button>
            <Button variant="menu" size="sm" disabled>
              Save
            </Button>
          </Toolbar>
          <WindowContent>
            <div
              className={
                !isMax
                  ? "project-content my-content"
                  : "project-content my-content max-my-content"
              }
            >
              <ProjectPage />
            </div>
          </WindowContent>
        </Window>
      </Draggable>
    </div>
  );
}
