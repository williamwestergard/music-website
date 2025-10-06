function Footer({ showAbout, isVisible }) {
  return (
    <>
      <section className="footer">
        <section className="footer-container">
          <article className="note">
            <p>
              <b
                style={{
                  fontStyle: "normal",
                  fontSize: "1.1rem",
                }}
              >
                Note:
              </b>
              <br />
              All songs, except remixes, <br /> were made by
              <span style={{ fontWeight: "200" }}> William Westergård.</span>
            </p>
          </article>
          <a onClick={showAbout} style={{ cursor: "pointer" }}>
            <article className="wanna-collab">
              <article className="wanna-collab.container">
                <h2>{isVisible ? "Information" : "About Me"}</h2>
                <p>Find out more:</p>
              </article>
              <svg
                className="arrow"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H20M20 12L14 6M20 12L14 18"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </article>
          </a>
        </section>
      </section>
    </>
  );
}

export default Footer;
