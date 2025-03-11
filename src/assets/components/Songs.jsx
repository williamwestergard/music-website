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

      // Track the last clicked song (even when paused)
      setLastClickedSongId(song.id);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const percentage =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  const [isDragging, setIsDragging] = useState(false);
  const [wasPlaying, setWasPlaying] = useState(false); // Track if audio was playing before dragging

  const handleSeek = (e) => {
    if (!audioRef.current) return;

    const progressBar = document.querySelector(".progress-bar-container");
    if (!progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const totalWidth = progressBar.clientWidth;
    const newTime = (clickX / totalWidth) * audioRef.current.duration;

    audioRef.current.currentTime = newTime;
    setProgress((clickX / totalWidth) * 100);
  };

  const handleMouseDown = (e) => {
    if (audioRef.current) {
      setWasPlaying(!audioRef.current.paused); // Save play state
      audioRef.current.pause(); // Pause audio while dragging
    }

    setIsDragging(true);
    handleSeek(e); // Seek immediately when clicked
  };

  const handleMouseMove = (e) => {
    if (isDragging) handleSeek(e); // Update progress while dragging
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (wasPlaying && audioRef.current) {
      audioRef.current.play(); // Resume playback if it was playing before
    }
  };

  // Global event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Return to initial state after song ends
  const handleEnded = () => {
    setPlayingAudioId(null);
    setProgress(0);
  };

  // Define the background color for each genre
  const genreBackgroundColor = {
    Demo: "#ffcccb",
    VoiceNote: "#f0e68c",
    Beat: "#f0f8ff",
    Remix: "#d3f8e2",
  };

  // Get the background color for the song's genre
  const backgroundColor = genreBackgroundColor[song.genre] || "#ffffff"; // Default to white if genre not found

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

      {/* Progress bar is visible after first play, but only enabled for the last clicked song */}
      {hasStarted && (
        <div
          className={`progress-bar-container ${
            (playingAudioId && playingAudioId !== song.id && !isPlaying) ||
            playingAudioRef.current !== audioRef.current
              ? "disabled"
              : ""
          }`}
          onMouseDown={handleMouseDown}
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
