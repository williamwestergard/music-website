import React, { useState, useRef } from "react";
import Songs from "./Songs";
import Filter from "./Filter";
import "../pages/css/responsive.css";

export default function SongList() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const playingAudioRef = useRef(null);

  const audioList = [
    {
      id: 1,
      name: "Better Than You",
      genre: "Pop",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 2,
      name: "Blaming it on Cupid",
      genre: "Pop",
      filter: "voice-note",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 3,
      name: "Tight",
      genre: "Pop",
      filter: "beats",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 4,
      name: "Post Malone - Remix",
      genre: "Pop",
      filter: "remixes",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 5,
      name: "Last Dance",
      genre: "Pop",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 6,
      name: "Thinking of You",
      genre: "Pop",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 7,
      name: "Learning to Fly",
      genre: "Pop",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 8,
      name: "Let You Go",
      genre: "Pop",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 9,
      name: "Leia and Han",
      genre: "Pop",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 10,
      name: "Teenage Dreams",
      genre: "Pop",
      filter: "voice-note",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 11,
      name: "Heavy Trap",
      genre: "Pop",
      filter: "beats",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 12,
      name: "Billie Eilish - Remix",
      genre: "Pop",
      filter: "remixes",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 13,
      name: "Katy Perry - Remix",
      genre: "Pop",
      filter: "remixes",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 14,
      name: "Skinny",
      genre: "Pop",
      filter: "beats",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 15,
      name: "With You",
      genre: "Pop",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 16,
      name: "Goodbye",
      genre: "Pop",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
  ];

  const getFilteredSongs = (filter) => {
    return filter === "all"
      ? audioList
      : audioList.filter((song) => song.filter === filter);
  };

  const handleFilterChange = (filter) => {
    const newFilteredSongs = getFilteredSongs(filter);
    const isPlayingSongInList = newFilteredSongs.some(
      (song) => song.id === playingAudioId
    );

    setSelectedFilter(filter);

    if (!isPlayingSongInList) {
      if (playingAudioRef.current) {
        playingAudioRef.current.pause();
        playingAudioRef.current = null;
      }
      setPlayingAudioId(null);
    }
  };

  const filteredSongs = getFilteredSongs(selectedFilter);

  return (
    <div>
      <Filter
        setSelectedFilter={handleFilterChange}
        selectedFilter={selectedFilter}
      />
      {filteredSongs.map((song) => (
        <Songs
          key={song.id}
          song={song}
          playingAudioId={playingAudioId}
          setPlayingAudioId={setPlayingAudioId}
          playingAudioRef={playingAudioRef}
        />
      ))}
    </div>
  );
}
