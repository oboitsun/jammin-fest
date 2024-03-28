"use client";
import Image from "next/image";
import { useEffect } from "react";
import juicy_fest from "../../assets/juicy_fest.png";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import Timer from "../../components/Timer";
export default function ComingSoon() {
  useEffect(() => {
    // Get a reference to the video element
    const video = document.getElementById("background-video");
    video.play();
    // Function to start the video when it's fully loaded
    const startVideoWhenLoaded = () => {
      video.play(); // Start playing the video
    };
  }, []);
  return (
    <div className="w-screen  h-screen overflow-hidden flex flex-col items-center relative">
      <Header />
      <div className="flex flex-col items-center gap-3 justify-center h-1/2 flex-grow w-full max-w-[1330px] relative">
        <div className="flex flex-col items-center w-full max-w-max ">
          <Image
            className="w-full max-w-[750px] relative left-1/4 -translate-x-[23%]   top-[26%] -translate-y-1/4"
            width={juicy_fest.width}
            height={juicy_fest.height}
            src={juicy_fest}
            alt="Juicy Fest"
          />
          <div className="relative bg-mustard border-[6px] border-purp rounded-xl w-full max-w-[632px] justify-center items-center flex p-4 pb-0 class-box  ">
            <p className="class"> class of 25&apos;</p>
          </div>
        </div>
        <Timer />
        <p className="lg:text-[calc(40rem/16)] leading-none tracking-[1%] text-center uppercase text-balance max-w-[600px] py-5">
          Thank you for attending Juicy Fest &apos;24. Stay tuned for updates and announcements for
          Juicy Fest &apos;25.
        </p>
        <Socials />
      </div>
      <div className="-z-[1] w-full h-full absolute top-0 left-0">
        <Image className="pointer-events-none opacity-50" fill src="/pattern.png" alt="pattern" />
        <div className="bg-black/50 absolute top-0 left-0 w-full h-full"></div>
        <video
          id="background-video"
          onLo
          className="w-full h-full object-cover"
          autoplay
          loop
          muted>
          <source src="/bg-video-min.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <iframe
          className="object-cover"
          width="100%"
          height="100%"
          frameBorder={0}
          src="https://www.youtube.com/embed/Sp_S_QIQa-U?mute=1&autoplay=1&controls=0&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe> */}
      </div>
    </div>
  );
}
