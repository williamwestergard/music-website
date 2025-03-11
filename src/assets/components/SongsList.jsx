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
      genre: "Demo",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 2,
      name: "Blaming it on Cupid",
      genre: "VoiceNote",
      filter: "voice-note",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 3,
      name: "Tight",
      genre: "Beat",
      filter: "beats",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 4,
      name: "Post Malone - Wow",
      genre: "Remix",
      filter: "remixes",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1741294938/music-website-songs/remixes/Post_malone_wow_remix_wilwester_nidx8h.mp3",
    },
    {
      id: 5,
      name: "Last Dance",
      genre: "Demo",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 6,
      name: "Thinking of You",
      genre: "Demo",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 7,
      name: "Learning to Fly",
      genre: "VoiceNote",
      filter: "voice-note",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 8,
      name: "Let You Go",
      genre: "Demo",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 9,
      name: "Leia and Han",
      genre: "Demo",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 10,
      name: "Teenage Dreams",
      genre: "Demo",
      filter: "demo",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 11,
      name: "Heavy Trap",
      genre: "Beat",
      filter: "beats",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 12,
      name: "Billie Eilish - i love you",
      genre: "Remix",
      filter: "remixes",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1741294302/music-website-songs/remixes/billie_eilish_i_love_you_remix_wilwester_bynnfq.mp3",
    },
    {
      id: 13,
      name: "Katy Perry - Hot N Cold",
      genre: "Remix",
      filter: "remixes",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1741294183/music-website-songs/remixes/katy_perry_hot_n_cold_remix_wilwester_qoxbsn.mp3",
    },
    {
      id: 14,
      name: "Skinny",
      genre: "Beat",
      filter: "beats",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 15,
      name: "With You",
      genre: "VoiceNote",
      filter: "voice-note",
      src: "https://www.w3schools.com/html/horse.ogg",
    },
    {
      id: 16,
      name: "Goodbye",
      genre: "Demo",
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
