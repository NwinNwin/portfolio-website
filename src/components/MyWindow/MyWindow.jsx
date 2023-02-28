import React from "react";
import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import "./MyWindow.css";
import Draggable, { DraggableCore } from "react-draggable";
import AboutPage from "../AboutPage/AboutPage";

export default function MyWindow() {
  return (
    <div className="window-div">
      <Draggable handle="strong">
        <Window resizable className="window">
          <strong className="cursor">
            <WindowHeader className="title-bar">
              <div class="title-bar-text">A Title Bar</div>
              <div class="title-bar-controls">
                <Button aria-label="Minimize"></Button>
                <Button aria-label="Maximize"></Button>
                <Button aria-label="Close"></Button>
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
            <div className="my-content">
              <AboutPage />
            </div>
          </WindowContent>
        </Window>
      </Draggable>
    </div>
  );
}
