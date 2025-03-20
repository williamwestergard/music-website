import MusicHeader from "../components/MusicHeader";
import SongsList from "../components/SongsList";
import "./css/rightSide.css";
import "./css/responsive.css";

function RightSide() {
  return (
    <>
      <main className="right-side-container">
        <MusicHeader />
        <SongsList />
        <br />

        <p
          className="footer-text"
          style={{ color: "#484848", textAlign: "center" }}
        >
          <i>@Wilwester 2025</i>
        </p>
        <br />
        <br />
        <section className="right-side-top-overlay"></section>
      </main>
    </>
  );
}

export default RightSide;
