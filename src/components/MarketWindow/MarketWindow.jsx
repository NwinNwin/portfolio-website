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
import "./MarketWindow.css";

import Draggable, { DraggableCore } from "react-draggable";
import MarketPage from "../MarketPage/MarketPage";
export default function MarketWindow({ setIsMarketOpen }) {
  return (
    <div className="market-window-div window-div">
      <Draggable handle="strong">
        <Window resizable className="window">
          <strong className="cursor">
            <WindowHeader className="title-bar">
              <div class="title-bar-text">Marketplace</div>
              <div class="title-bar-controls">
                <Button aria-label="Minimize"></Button>
                <Button aria-label="Maximize"></Button>
                <Button
                  aria-label="Close"
                  onClick={() => {
                    setIsMarketOpen(false);
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
            <div className="market-content my-content">
              <MarketPage />
            </div>
          </WindowContent>
        </Window>
      </Draggable>
    </div>
  );
}
