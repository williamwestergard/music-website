import React from "react";
import Shape from "../components/shape_02.png";

function Information() {
  return (
    <>
      <section className="information">
        <h2>Information</h2>
        <section className="information-p-container">
          <p>
            The demos and voice notes are a work in progress and are unfinished
            to various degrees.
            <br /> <br /> Some songs don't have <br /> actual lyrics.
          </p>
          <p>
            You can <b>switch between </b>
            demos, voice notes, beats and remixes in the top right corner.
            <br /> <br />
            Psst, while you listen to the songs, <b> click here </b> to learn
            more this Wilwester guy.
          </p>

          <img className="shape-img" src={Shape} />
        </section>
      </section>
    </>
  );
}

export default Information;
