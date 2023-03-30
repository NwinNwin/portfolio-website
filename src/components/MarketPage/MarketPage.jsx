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

export default function MarketPage() {
  return (
    <div className="market-content">
      <div>
        <img src="//web.archive.org/web/20220904061413im_/https://cdn.shopify.com/s/files/1/2731/1388/t/11/assets/menu-browse_125x.jpg?v=132482183862390953861533492721" />
        <img src="//web.archive.org/web/20220904061413im_/https://cdn.shopify.com/s/files/1/2731/1388/t/11/assets/menu-sell_125x.jpg?v=87926657540146666301533492750" />
        <img src="//web.archive.org/web/20220904061413im_/https://cdn.shopify.com/s/files/1/2731/1388/t/11/assets/menu-services_125x.jpg?v=18256923694229474921533492759" />
        <img src="//web.archive.org/web/20220904061413im_/https://cdn.shopify.com/s/files/1/2731/1388/t/11/assets/menu-help_125x.jpg?v=23361398229467722221533492736" />
        <img src="//web.archive.org/web/20220904061413im_/https://cdn.shopify.com/s/files/1/2731/1388/t/11/assets/menu-community_125x.jpg?v=155361199490045294271533492729" />
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
