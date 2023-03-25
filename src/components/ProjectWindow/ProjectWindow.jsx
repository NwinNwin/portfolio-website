import React from "react";
import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  TextInput,
} from "react95";
import "../MyWindow/MyWindow.css";
import "./ProjectWindow.css";

import Draggable, { DraggableCore } from "react-draggable";
import ProjectPage from "../ProjectPage/ProjectPage";
export default function ProjectWindow({ setIsProjectOpen }) {
  return (
    <div className="project-window-div window-div">
      <Draggable handle="strong">
        <Window resizable className="window">
          <strong className="cursor">
            <WindowHeader className="title-bar">
              <div class="title-bar-text">Internet</div>
              <div class="title-bar-controls">
                <Button aria-label="Minimize"></Button>
                <Button aria-label="Maximize"></Button>
                <Button
                  aria-label="Close"
                  onClick={() => {
                    setIsProjectOpen(false);
                  }}
                ></Button>
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
            <div className="project-content my-content">
              <ProjectPage />
            </div>
          </WindowContent>
        </Window>
      </Draggable>
    </div>
  );
}
