import React, { useState } from "react";
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar } from "react95";

export default function BottomBar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar className="myAppbar">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button onClick={() => setOpen(!open)} active={open} style={{ fontWeight: "bold" }}>
            Start
          </Button>
        </div>
        <TextInput placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>
  );
}
