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
import "./AboutPage.css";
import welcome from "../../images/welcomegif.gif";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  const categories = [
    {
      id: "projects",
      label: "Projects",
      icon: <>💻</>,
      items: [
        {
          id: "zotpals",
          label: "ZotPals",
          icon: <>🛒</>,
        },
        {
          id: "havefun",
          label: "HaveFun",
          icon: <>😀</>,
        },
        {
          id: "tictactoeplus",
          label: "Tic-Tac-Toe➕",
          icon: <>❌</>,
        },
      ],
    },
    {
      id: "skills",
      label: "Skills",
      icon: <>⚒️</>,
      items: [
        {
          id: "python",
          label: "Python",
        },
        {
          id: "c",
          label: "C++",
        },

        {
          id: "react",
          label: "Web Dev",
          items: [
            {
              id: "javascript",
              label: "Javascript",
            },
            {
              id: "react",
              label: "React JS",
            },
            {
              id: "html",
              label: "HTML/CSS",
            },
            {
              id: "nosql",
              label: "NoSQL",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      {/* <img src={welcome} alt="" /> */}

      <div>
        <div
          style={{ maxWidth: "250px", background: "#e6e6e6", color: "navy" }}
        >
          <GroupBox label="About Me">
            <img className="pfp" src={myselfpixel} alt="" />

            <h1 className="name">Dang Nguyen</h1>
            <TreeView tree={categories} />
          </GroupBox>
        </div>
      </div>

      <p>
        This text is really long and the height of its container is only 100
        pixels. Therefore, a scrollbar is added to help the reader to scroll the
        content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
        tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
        quod mazim placerat facer possim assum. Typi non habent claritatem
        insitam; est usus legentis in iis qui facit eorum claritatem
      </p>
    </>
  );
}
