import React, { useState } from "react";
import {
  Button,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  TextInput,
} from "react95";
import "./MyWindow.css";
import Draggable from "react-draggable";
import AboutPage from "../AboutPage/AboutPage";
import minimize from "../../images/minimize.svg";
import maximize from "../../images/maximize.svg";
import close from "../../images/close.svg";

export default function MyWindow({
  setIsOpen,
  setIsProjectOpen,
  setIsMarketOpen,
  setContactOpen,
}) {
  const [isMax, setIsMax] = useState(false);

  return (
    <div className={!isMax ? "window-div" : "window-div max-window-div"}>
      <Draggable
        bounds={{ top: -30, left: -100, right: 50, bottom: 100 }}
        handle="strong"
        cancel=".btn"
      >
        <Window resizable className={!isMax ? "window" : "window max-window"}>
          <strong className="cursor">
            <WindowHeader className="title-bar">
              <div class="title-bar-text">Internet</div>
              <div class="title-bar-controls">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="btn"
                >
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
                    setIsOpen(false);
                  }}
                  className="btn"
                >
                  <img className="window-btn" src={close} alt="" />
                </Button>
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
            <div
              className={!isMax ? "my-content" : "my-content max-my-content"}
            >
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
