import React, { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
} from "react95";
import windows from "../images/windows.png";
import github from "../images/github_copy.svg";
import linkedin from "../images/linkedin.svg";
import email from "../images/email.svg";

export default function BottomBar({ ContactOpen, setContactOpen }) {
  return (
    <AppBar className="myAppbar">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setContactOpen(!ContactOpen)}
            active={ContactOpen}
            style={{ fontWeight: "bold" }}
          >
            <img className="windows-logo" src={windows} alt="" />
            Contact
          </Button>
          {ContactOpen && (
            <MenuList
              style={{
                position: "absolute",
                left: "0",
                bottom: "100%",
                zIndex: "9",
              }}
              onClick={() => setContactOpen(false)}
            >
              <a href="https://github.com/NwinNwin" target="_blank">
                <MenuListItem>
                  <img style={{ width: "25px" }} src={github} alt="hi" />
                  <p>GitHub</p>
                </MenuListItem>
              </a>

              <a href="https://www.linkedin.com/in/nwin/" target="_blank">
                <MenuListItem>
                  <img style={{ width: "25px" }} src={linkedin} alt="hi" />
                  <p> &nbsp; Linkedin</p>
                </MenuListItem>
              </a>

              <a href="mailto:dangnn1@uci.edu" target="_blank">
                <MenuListItem>
                  <img style={{ width: "25px" }} src={email} alt="hi" />
                  <p> &nbsp; E-mail</p>
                </MenuListItem>
              </a>
              <Separator />
              <MenuListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )}
        </div>
        <TextInput disabled={true} placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>
  );
}
