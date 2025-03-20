import React from "react";
// import Shape from "../components/shape_02.png";
import Cd from "../components/rose.webm";

function Information() {
  return (
    <>
      <section className="information">
        <h2>Information</h2>
        <section className="information-p-container">
          <p>
            These songs are a work in progress and are unfinished to various
            degrees.
            <br /> <br /> They're meant to be performed by other artists.
          </p>
          <p>
            You can <b>switch between </b>
            demos, voice notes, beats and remixes in the top right corner.
          </p>
          <video className="shape-img" src={Cd} loop autoPlay muted />
        </section>
      </section>
    </>
  );
}

export default Information;
