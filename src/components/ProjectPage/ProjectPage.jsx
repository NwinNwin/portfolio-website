import React, { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
  GroupBox,
  TreeLeaf,
  TreeView,
  ColorInput,
} from "react95";

import myselfpixel from "../../images/myselfpixel.png";
import "./ProjectPage.css";

export default function ProjectPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-page-content"></div>
    </>
  );
}
