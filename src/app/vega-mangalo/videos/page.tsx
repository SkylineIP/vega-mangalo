"use client";

import React, { useRef, useState } from "react";
import Videos, { VideoControls } from "../../components/Video";
import Menu from "../components/Menu";
import Image from "next/image";

const Serie: React.FC = () => {
  const videoRef = useRef<VideoControls | null>(null);
  const [, setIsPlaying] = useState(false);
  const navButtons = [
    { name: "rewind", src: "/videos/rewind.png" },
    { name: "play", src: "/videos/play.png" },
    { name: "pause", src: "/videos/pause.png" }
  ]

  const handleNavClick = (name: string) => {
    if (name === "play") {
      videoRef.current?.play();
      setIsPlaying(true);
    } else if (name === "pause") {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else if (name === "rewind") {
      videoRef.current?.rewind();
    }
  };
  return (
    <div className="w-full h-full bg-background grid grid-cols-24 grid-rows-24 ">
      <Menu />
      <div className="col-span-19 row-span-21 row-start-1 overflow-hidden animate-fade animate-duration-[2000ms] relative">
        <Videos
          ref={videoRef}
          videoSrc="/videos/vega-mangalo.mp4"
          thumb="/videos/vega-mangalo-thumb.png"
          noControls
        />
      </div>
      <div className="col-span-17 bg-[#00978C] row-span-3 flex items-center justify-center p-8">
        <div className=" border-2 border-white rounded-full py-1 px-2 flex items-center justify-between gap-10">
          {navButtons.map((button) => (
            <button
              key={button.name}
              className="relative w-12 h-12 hover:scale-[1.02] transition-transform"
              onClick={() => handleNavClick(button.name)}
            >
              <Image
                src={button.src}
                alt={button.name}
                fill
                className="object-contain pointer-events-none"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serie;
