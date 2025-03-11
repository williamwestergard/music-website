import React, { useRef, useState, useEffect } from "react";
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
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [wasPlaying, setWasPlaying] = useState(false); // Track if audio was playing before dragging

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
        setHasStarted(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const percentage =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;

    const progressBar = document.querySelector(".progress-bar-container");
    if (!progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX; // Handle touch event
    const clickX = clientX - rect.left;
    const totalWidth = progressBar.clientWidth;
    const newTime = (clickX / totalWidth) * audioRef.current.duration;

    audioRef.current.currentTime = newTime;
    setProgress((clickX / totalWidth) * 100);
  };

  const handleStart = (e) => {
    if (audioRef.current) {
      setWasPlaying(!audioRef.current.paused);
      audioRef.current.pause();
    }

    setIsDragging(true);
    handleSeek(e);
  };

  const handleMove = (e) => {
    if (isDragging) handleSeek(e);
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (wasPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };

  // Global event listeners for both mouse and touch dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleMove);
      document.addEventListener("touchend", handleEnd);
    } else {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  const handleEnded = () => {
    setPlayingAudioId(null);
    setProgress(0);
  };

  const genreBackgroundColor = {
    Demo: "#ffcccb",
    VoiceNote: "#f0e68c",
    Beat: "#f0f8ff",
    Remix: "#d3f8e2",
  };

  const backgroundColor = genreBackgroundColor[song.genre] || "#ffffff";

  return (
    <section className="songs-container">
      <article className="song-title" onClick={toggleAudio}>
        {song.name}
      </article>
      <article
        className="song-tag"
        style={{ backgroundColor: backgroundColor }}
      >
        <p>{song.genre}</p>
      </article>
      <article className="song-play-button" onClick={toggleAudio}>
        <img
          className="song-play-button-icon"
          src={isPlaying ? Pausebutton : Playbutton}
          alt={isPlaying ? "Pause" : "Play"}
        />
      </article>

      {hasStarted && (
        <div
          className={`progress-bar-container ${
            (playingAudioId && playingAudioId !== song.id && !isPlaying) ||
            playingAudioRef.current !== audioRef.current
              ? "disabled"
              : ""
          }`}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      <audio
        ref={audioRef}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={song.src} type="audio/mpeg" />
      </audio>
    </section>
  );
}
