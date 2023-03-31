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

import MarketItems from "./MarketItems";
import ebay from "../../images/ebay.png";
import nwinsworld from "../../images/nwinsworld.png";
import mario from "../../images/mario.png";
import epic from "../../images/epic.gif";
import marketplace1 from "../../images/marketplace1.jpeg";

import market_header1 from "../../images/market_header1.jpeg";
import market_header2 from "../../images/market_header2.jpeg";
import market_header3 from "../../images/market_header3.jpeg";
import market_header4 from "../../images/market_header4.jpeg";

export default function MarketPage() {
  return (
    <div className="market-content">
      <div>
        <img src={market_header1} />
        <img src={market_header2} />
        <img src={market_header3} />
        <img src={market_header4} />
      </div>
      <div class="container">
        <div class="box first">
          <img className="ebay-market" src={ebay} alt="ebay" />
          <div className="categories">Categories</div>
          <ul id="categories-list">
            <li>
              <p className="cata-txt">
                Antiques
                <span class="dummy-qty">(44887)</span>
              </p>
            </li>

            <li>
              <p className="cata-txt">
                Books
                <span class="dummy-qty">(12492)</span>
              </p>
            </li>

            <li>
              <p className="cata-txt">
                Coins
                <span class="dummy-qty">(93812)</span>
              </p>
            </li>

            <li>
              <p className="cata-txt">
                Collectibles
                <span class="dummy-qty">(143412)</span>
              </p>
            </li>

            <li>
              <p className="cata-txt">
                Figures
                <span class="dummy-qty">(34212)</span>
              </p>
            </li>

            <li>
              <p className="cata-txt">
                Electronics
                <span class="dummy-qty">(14532)</span>
              </p>
            </li>

            <li>
              <p className="cata-txt">
                Fashion
                <span class="dummy-qty">(43233)</span>
              </p>
            </li>

            <li>
              <p className="cata-txt">
                DVDs
                <span class="dummy-qty">(467245)</span>
              </p>
            </li>

            <li>
              <p className="cata-txt">
                Computers
                <span class="dummy-qty">(77774)</span>
              </p>
            </li>
            <li>
              <p className="cata-txt">all categories...</p>
            </li>
          </ul>
        </div>
        <div class="box">
          <MarketItems />
        </div>
        <div class="box">
          <div>
            <img className="nwinsworld" src={nwinsworld} alt="" />
          </div>
          <div>
            <img src={mario} alt="mario" />
            <img src={epic} alt="mario" />
          </div>
          <div>
            <img className="nwinsworld" src={marketplace1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
