import React, { useState } from "react";

import MusicHeader from "../components/MusicHeader";
import SongsList from "../components/SongsList";
import "./css/rightSide.css";
import "./css/responsive.css";

function RightSide() {
  // const [isVisible, setIsVisible] = useState(false);
  // const showMusicContent = () => setIsVisible(!isVisible);
  return (
    <>
      <main className="right-side-container">
        {/* <div
          id="startpage-music-overlay"
          style={{ display: isVisible ? "none" : "block" }}
        >
          <h1>Music</h1>
          <button onClick={showMusicContent}>Click here</button>
        </div> */}

        <MusicHeader />
        <SongsList />
        <br />
        <p
          className="footer-text"
          style={{ color: "#484848", textAlign: "center", fontSize: ".9rem" }}
        >
          <i>@William Westergård 2025</i>
        </p>
        <br />
        <br />
        <section className="right-side-top-overlay"></section>
      </main>
    </>
  );
}

export default RightSide;
