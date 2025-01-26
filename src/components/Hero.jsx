import React from "react";
import herovideo from "../assets/video/herovideo1.mp4";
import ButtonWithHoverEffect from "./Buttons/ButtonWithHoverEffect";

const Hero = () => {
  return (
    <div className="bg-[#F9F5F2] min-h-[80vh] md:h-[85vh]">
      <section className="w-[90%] md:w-[80%] mx-auto py-[30px] md:py-[90px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-[60%] text-center md:text-left mt-8 md:mt-0 px-4 md:px-0">
            <h1 className="font-cabin text-[16px] md:text-[20px] text-[#52514E] mb-2">
              Hi, my name is Pratik Nikat.
            </h1>
            <h2 className="unigeo-large text-[40px] md:text-[80px] text-[#282825] mb-6 leading-tight">
              TURNING IDEAS INTO{" "}
              <span className="relative group">
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                <span className="relative z-10 text-[#4c619e] group-hover:text-white px-2 py-1 transition-colors duration-500">
                  CODE
                </span>
              </span>
            </h2>
            <p className="font-cabin text-[#52514E] text-[16px] md:text-[20px] mb-8">
              I'm a Full Stack Developer skilled in the MERN stack, with a
              passion for building scalable applications.
            </p>
            <div className="flex justify-center md:justify-start">
              <ButtonWithHoverEffect />
            </div>
          </div>
          <div className="w-full md:w-[50%] flex justify-center md:justify-end">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
