import React, { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Information from "../components/Information";
import About_Me from "../components/AboutMe";
import "./css/leftSide.css";
import "./css/responsive.css";

function LeftSide() {
  const [isVisible, setIsVisible] = useState(false);

  const showAbout = () => setIsVisible(!isVisible);

  return (
    <>
      <main className="left-side-container">
        <Header />

        <span style={{ display: isVisible ? "none" : "block" }}>
          <Information />
        </span>

        <span style={{ display: isVisible ? "block" : "none" }}>
          <About_Me />
        </span>

        <Footer showAbout={showAbout} isVisible={isVisible} />
      </main>
    </>
  );
}

export default LeftSide;
