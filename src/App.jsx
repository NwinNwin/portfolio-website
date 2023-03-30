import React, { useState, useEffect } from "react";
import { MenuList, MenuListItem, Separator, styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import BottomBar from "./components/BottomBar";
import DesktopApp from "./components/DesktopApp/DesktopApp";
import MyWindow from "./components/MyWindow/MyWindow";
import ProjectWindow from "./components/ProjectWindow/ProjectWindow";
import MarketWindow from "./components/MarketWindow/MarketWindow";
import "98.css";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isMarketOpen, setIsMarketOpen] = useState(true);

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        {isOpen && (
          <MyWindow
            setIsOpen={setIsOpen}
            setIsProjectOpen={setIsProjectOpen}
            setIsMarketOpen={setIsMarketOpen}
          />
        )}
        {isProjectOpen && <ProjectWindow setIsProjectOpen={setIsProjectOpen} />}
        {isMarketOpen && <MarketWindow setIsMarketOpen={setIsMarketOpen} />}

        <DesktopApp
          setIsOpen={setIsOpen}
          setIsProjectOpen={setIsProjectOpen}
          setIsMarketOpen={setIsMarketOpen}
        />
        <BottomBar />
      </ThemeProvider>
    </div>
  );
};

export default App;
