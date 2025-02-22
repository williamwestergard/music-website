import React, { useRef } from "react";
import Playbutton from "../components/play-button.png";
import Pausebutton from "../components/pause-button.png";
import "../pages/css/responsive.css";

export default function Songs({
  song,
  playingAudioId,
  setPlayingAudioId,
  playingAudioRef,
}) {
  const audioRef = useRef(null);
  const isPlaying = playingAudioId === song.id;

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setPlayingAudioId(null);
      } else {
        if (
          playingAudioRef.current &&
          playingAudioRef.current !== audioRef.current
        ) {
          playingAudioRef.current.pause();
        }

        audioRef.current.play();
        setPlayingAudioId(song.id);
        playingAudioRef.current = audioRef.current;
      }
    }
  };

  return (
    <section className="songs-container">
      <article className="song-title" onClick={toggleAudio}>
        {song.name}
      </article>
      <article className="song-tag">
        <p>{song.genre}</p>
      </article>
      <article className="song-play-button" onClick={toggleAudio}>
        <img
          className="song-play-button-icon"
          src={isPlaying ? Pausebutton : Playbutton}
          alt={isPlaying ? "Pause" : "Play"}
        />
      </article>
      <audio ref={audioRef} onEnded={() => setPlayingAudioId(null)}>
        <source src={song.src} type="audio/mpeg" />
      </audio>
    </section>
  );
}
