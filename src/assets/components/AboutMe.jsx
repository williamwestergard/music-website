import React from "react";
import Profile_Pic from "../components/profile_pic.png";
import ArrowDiagonal from "../components/arrow-diagonal.png";

function About_Me() {
  const user = "william.westergard";
  const domain = "outlook.com";
  const email = `${user}@${domain}`;
  return (
    <>
      <section id="about-me">
        <section className="information">
          <h2>About me</h2>
          <section className="information-p-container">
            <p>
              I'm a musician based in Stockholm, Sweden.
              <br /> <br /> I play guitar, bass and keyboard and have been
              making music consistently for over 15 years.
            </p>
            <p>
              Do you want to work on these songs?
              <br />
              Or do you need help with your own projects?
              <br />
              <br />
              <a
                className="lets-talk"
                href={`mailto:${email}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <b> Let's talk</b>
                <img
                  src={ArrowDiagonal}
                  className="arrow-diagonal"
                  alt="Arrow"
                />
                <span className="lets-talk-underline"></span>
              </a>
            </p>

            <img className="profile-pic" src={Profile_Pic} />
          </section>
        </section>
      </section>
    </>
  );
}

export default About_Me;
