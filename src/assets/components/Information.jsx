import React from "react";
import Shape from "../components/shape_02.png";

function Information() {
  return (
    <>
      <section className="information">
        <h2>Information</h2>
        <section className="information-p-container">
          <p>
            The songs are a work in progress and are unfinished to various
            degrees.
            <br /> <br /> The key might need to be transposed for the artist.
          </p>
          <p>
            You can <b>switch between </b>
            demos, voice notes, beats and remixes in the top right corner.
          </p>

          <img className="shape-img" src={Shape} />
        </section>
      </section>
    </>
  );
}

export default Information;
