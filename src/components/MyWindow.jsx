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

export default function MyWindow() {
  return (
    <>
      <Draggable handle="strong">
        <Window resizable className="window">
          <strong className="cursor">
            <WindowHeader className="window-title">
              <span>react95.exe</span>
              <Button>
                <span className="close-icon" />
              </Button>
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
            <p>
              When you set &quot;resizable&quot; prop, there will be drag handle
              in the bottom right corner (but resizing itself must be handled by
              you tho!)
            </p>
          </WindowContent>
          <Frame variant="well" className="footer">
            Put some useful information here
          </Frame>
        </Window>
      </Draggable>

      <Draggable>
        <Window className="window">
          <WindowHeader active={false} className="window-title">
            <span>not-active.exe</span>
            <Button>
              <span className="close-icon" />{" "}
            </Button>
          </WindowHeader>
          <WindowContent>I am not active</WindowContent>
        </Window>
      </Draggable>
    </>
  );
}
