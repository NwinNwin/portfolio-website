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
import "./MarketPage.css";

import market1 from "../../images/market1.jpeg";
import market2 from "../../images/market2.jpeg";
import market3 from "../../images/market3.jpeg";
import market4 from "../../images/market4.jpeg";

export default function MarketItems() {
  return (
    <div>
      <a href="https://www.instagram.com/p/CT6DQl4r121/" target="_blank">
        <div className="items-box">
          <img className="market-items" src={market1} alt="" />
        </div>
      </a>

      <a href="https://www.instagram.com/p/CTYBLqkvOsz/" target="_blank">
        <div className="items-box">
          <img className="market-items" src={market4} alt="" />
        </div>
      </a>

      <a href="https://www.instagram.com/p/CTwDqcmrcO7/" target="_blank">
        <div className="items-box">
          <img className="market-items" src={market2} alt="" />
        </div>
      </a>

      <a href="https://www.instagram.com/p/CTflyQPBma0/" target="_blank">
        <div className="items-box">
          <img className="market-items" src={market3} alt="" />
        </div>
      </a>
    </div>
  );
}
