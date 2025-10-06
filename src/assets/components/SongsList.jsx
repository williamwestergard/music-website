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
      id: 9,
      name: "Leia and Han",
      genre: "Demo",
      filter: "demo",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1759349593/music-website-songs/Demos/Leia_and_Han.mp3",
    },
    {
      id: 1,
      name: "Better Than You",
      genre: "Demo",
      filter: "demo",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1759349478/music-website-songs/Demos/Better_Than_You.mp3",
    },
    {
      id: 4,
      name: "Post Malone - Wow",
      genre: "Remix",
      filter: "remixes",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1741294938/music-website-songs/remixes/Post_malone_wow_remix_wilwester_nidx8h.mp3",
    },
    {
      id: 6,
      name: "Thinking of You",
      genre: "Acoustic",
      filter: "voice-note",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1759353234/music-website-songs/Acoustic/Thinking_of_You.mp3",
    },
    {
      id: 16,
      name: "Goodbyeee",
      genre: "Demo",
      filter: "demo",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1759777918/music-website-songs/Demos/goodbyeeee.mp3",
    },
    {
      id: 13,
      name: "Stank",
      genre: "Beat",
      filter: "beats",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1758486421/music-website-songs/Beats/Stank.mp3",
    },
    {
      id: 8,
      name: "Let You Go",
      genre: "Demo",
      filter: "demo",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1759780715/music-website-songs/Demos/Let_you_go_short_version_jpadcf.mp3",
    },
    {
      id: 5,
      name: "Last Dance",
      genre: "Demo",
      filter: "demo",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1759779799/music-website-songs/Demos/Last_Dance.mp3",
    },

    {
      id: 11,
      name: "Violins",
      genre: "Beat",
      filter: "beats",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1758486380/music-website-songs/Beats/Violins.mp3",
    },
    {
      id: 12,
      name: "Billie Eilish - i love you",
      genre: "Remix",
      filter: "remixes",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1741294302/music-website-songs/remixes/billie_eilish_i_love_you_remix_wilwester_bynnfq.mp3",
    },
    {
      id: 2,
      name: "Blaming it on Cupid",
      genre: "Demo",
      filter: "demo",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1758228550/music-website-songs/Demos/Blaming_it_on_Cupid.mp3",
    },

    {
      id: 14,
      name: "Jibberish Improv",
      genre: "Acoustic",
      filter: "voice-note",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1759781284/music-website-songs/Acoustic/R%C3%B6st_1559.mp3",
    },
    {
      id: 15,
      name: "S P I C E",
      genre: "Beat",
      filter: "beats",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1758486447/music-website-songs/Beats/Spice.mp3",
    },

    {
      id: 3,
      name: "Sweet Talk",
      genre: "Beat",
      filter: "beats",
      src: "https://res.cloudinary.com/dbvcotnqt/video/upload/v1758036588/music-website-songs/Beats/Sweet_talk_mp3_qxu3e9.mp3",
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
