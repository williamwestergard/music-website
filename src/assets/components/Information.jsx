import React, { useState } from "react";
import Cd from "../components/cd.webm";

function Information() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <section className="information">
        <h2>Information</h2>
        <section className="information-p-container">
          <p>
            These songs are a work in progress, both in production and lyrics.
            <br /> <br /> They might need to be transposed for the artist.
          </p>
          <p>
            You can <b>switch between </b>
            demos, voice notes, beats and remixes in the top right corner.
          </p>

          <section id="img-loader-container">
            {loading && (
              <svg
                className="loader-spinner"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
              >
                <circle
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  strokeWidth="15"
                  r="15"
                  cx="40"
                  cy="100"
                >
                  <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.4"
                  ></animate>
                </circle>
                <circle
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  strokeWidth="15"
                  r="15"
                  cx="100"
                  cy="100"
                >
                  <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.2"
                  ></animate>
                </circle>
                <circle
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  strokeWidth="15"
                  r="15"
                  cx="160"
                  cy="100"
                >
                  <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="0"
                  ></animate>
                </circle>
              </svg>
            )}
            <video
              className="shape-img"
              src={Cd}
              loop
              autoPlay
              muted
              onLoadedData={() => setLoading(false)}
              style={{
                opacity: loading ? 0.5 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
          </section>
        </section>
      </section>
    </>
  );
}

export default Information;
