import Logo from "./logo/logo14.png";

function Header() {
  return (
    <>
      <section className="header">
        <img className="wilwester-logo" src={Logo} />
        {/* <h1>
          Wil <br /> Wester
        </h1> */}
        <article
          style={{ position: "relative", top: "-6.8vh", right: "-5.75vw" }}
        >
          <p> William Westergård</p>
          <p style={{ fontWeight: "100" }}>Music Producer & Songwriter </p>
        </article>
      </section>
    </>
  );
}

export default Header;
