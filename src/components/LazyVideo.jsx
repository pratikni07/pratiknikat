import React from "react";
import herovideo from "../assets/video/herovideo1.mp4";

const LazyVideo = () => {
  return (
    <video
      className="w-full object-cover rounded-lg"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={herovideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
