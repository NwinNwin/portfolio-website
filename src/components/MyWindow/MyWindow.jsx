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
import "./MyWindow.css";
import Draggable, { DraggableCore } from "react-draggable";
import AboutPage from "../AboutPage/AboutPage";

export default function MyWindow({
  setIsOpen,
  setIsProjectOpen,
  setIsMarketOpen,
  setContactOpen,
}) {
  return (
    <div className="window-div">
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
                    setIsOpen(false);
                  }}
                ></Button>
              </div>
            </WindowHeader>
          </strong>
          <Toolbar>
            <TextInput
              defaultValue="https://www.facebook.com/nguyen.nguyen.nguyen.nguyen.nguyen.nguyen.nguyen"
              fullWidth
            />
          </Toolbar>
          <WindowContent>
            <div className="my-content">
              <AboutPage
                setIsProjectOpen={setIsProjectOpen}
                setIsMarketOpen={setIsMarketOpen}
                setContactOpen={setContactOpen}
              />
            </div>
          </WindowContent>
        </Window>
      </Draggable>
    </div>
  );
}
