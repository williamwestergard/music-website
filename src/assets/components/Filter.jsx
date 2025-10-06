import "../pages/css/responsive.css";

function Filter({ setSelectedFilter, selectedFilter }) {
  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? "all" : filter);
  };

  return (
    <section className="filter">
      <section className="filter-1nd-row">
        <span
          onClick={() => handleFilterClick("all")}
          className="filter-button"
          style={{
            backgroundColor: selectedFilter === "all" ? "white" : "black",
            color: selectedFilter === "all" ? "#030303" : "#f2e9ed",
            fontWeight: selectedFilter === "all" ? "600" : "normal",
          }}
        >
          <p>All</p>
        </span>
        <span
          onClick={() => handleFilterClick("demo")}
          className="filter-button"
          style={{
            backgroundColor: selectedFilter === "demo" ? "white" : "black",
            color: selectedFilter === "demo" ? "#030303" : "#f2e9ed",
            fontWeight: selectedFilter === "demo" ? "600" : "normal",
          }}
        >
          <p>Demos</p>
        </span>
        <span
          onClick={() => handleFilterClick("voice-note")}
          className="filter-button"
          style={{
            backgroundColor:
              selectedFilter === "voice-note" ? "white" : "black",
            color: selectedFilter === "voice-note" ? "#030303" : "#f2e9ed",
            fontWeight: selectedFilter === "voice-note" ? "600" : "normal",
          }}
        >
          <p>Acoustic</p>
        </span>
      </section>

      <section className="filter-2nd-row">
        <span
          onClick={() => handleFilterClick("beats")}
          className="filter-button"
          style={{
            backgroundColor: selectedFilter === "beats" ? "white" : "black",
            color: selectedFilter === "beats" ? "#030303" : "#f2e9ed",
            fontWeight: selectedFilter === "beats" ? "600" : "normal",
          }}
        >
          <p>Beats</p>
        </span>
        <span
          onClick={() => handleFilterClick("remixes")}
          className="filter-button"
          style={{
            backgroundColor: selectedFilter === "remixes" ? "white" : "black",
            color: selectedFilter === "remixes" ? "#030303" : "#f2e9ed",
            fontWeight: selectedFilter === "remixes" ? "600" : "normal",
          }}
        >
          <p>Remixes</p>
        </span>
      </section>
    </section>
  );
}

export default Filter;
