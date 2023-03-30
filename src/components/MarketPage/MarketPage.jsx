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

import ebay from "../../images/ebay.png";

export default function MarketPage() {
  return (
    <>
      <div class="container">
        <div class="box">
          <img className="ebay-market" src={ebay} alt="ebay" />
          <div className="categories">Categories</div>
          <ul id="categories-list">
            <li>
              <p>
                Antiques
                <span class="dummy-qty">(44887)</span>
              </p>
            </li>

            <li>
              <p>
                Books
                <span class="dummy-qty">(12492)</span>
              </p>
            </li>

            <li>
              <p>
                Cheetoes
                <span class="dummy-qty">(93812)</span>
              </p>
            </li>

            <li>
              <p>
                Cheetoes
                <span class="dummy-qty">(143412)</span>
              </p>
            </li>

            <li>
              <p>
                Cheetoes
                <span class="dummy-qty">(34212)</span>
              </p>
            </li>

            <li>
              <p>
                Cheetoes
                <span class="dummy-qty">(14532)</span>
              </p>
            </li>

            <li>
              <p>
                Cheetoes
                <span class="dummy-qty">(43233)</span>
              </p>
            </li>

            <li>
              <p>
                Cheetoes
                <span class="dummy-qty">(467245)</span>
              </p>
            </li>

            <li>
              <p>
                Cheetoes
                <span class="dummy-qty">(77774)</span>
              </p>
            </li>
            <li>
              <p>all categories...</p>
            </li>
          </ul>
        </div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
      </div>
    </>
  );
}
