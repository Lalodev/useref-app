import { useRef, useState } from "react";

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const handelPlay = () => {
    const video = videoRef.current;

    isPlaying ? video.pause() : video.play();

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <video width="400" ref={videoRef} onClick={handelPlay}>
        <source src="videos/planet.mp4" type="video/mp4" />
      </video>
      <br />
      <button onClick={handelPlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MediaPlayer;
