import Footer from "../components/Footer";
import Header from "../components/Header";
import Information from "../components/Information";
import "./css/leftSide.css";
import "./css/responsive.css";

function LeftSide() {
  return (
    <>
      <main className="left-side-container">
        <Header />
        <Information />
        <Footer />
      </main>
    </>
  );
}

export default LeftSide;
