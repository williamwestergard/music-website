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
        <section className="right-side-top-overlay"></section>
      </main>
    </>
  );
}

export default RightSide;
