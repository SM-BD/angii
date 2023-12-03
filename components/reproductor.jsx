import React, { useState, useRef, useEffect } from "react";

function MusicPlayer({ songs, loop = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const play = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  useEffect(() => {
    play();

    const handleEnded = () => {
      let nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= songs.length) {
        if (loop) {
          nextSongIndex = 0;
        } else {
          setIsPlaying(false);
          return;
        }
      }
      setCurrentSongIndex(nextSongIndex);
      play();
    };

    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, [currentSongIndex, loop]);

  return (
    <div className="fixed bottom-4 right-4 flex items-center bg-black text-white p-2 rounded-md">
      <div className="mr-2">
        <button className="text-white" onClick={handlePlayPause}>
          {isPlaying ? "⏸️" : "▶️"}
        </button>
      </div>
      <div>Now playing: {currentSong.name}</div>
      <audio ref={audioRef} src={currentSong.audioFile} />
    </div>
  );
}

export default MusicPlayer;
