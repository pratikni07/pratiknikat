import React from "react";
import project1 from "../assets/Project/9.png";
import ButtonWithShadow from "./Buttons/ButtonWithHoverEffect";

const Projects = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={project1}
          alt="Krishi Mantra Project"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="p-6 md:p-[70px] rounded-lg font-sans">
          {/* <ButtonWithShadow /> */}
          <h2 className="unigeo text-[#333333] text-xl md:text-3xl font-bold mb-4 mt-7">
            Empowering Farmers with Krishi Mantra
          </h2>
          <p className="font-cabin text-[#555555] text-base leading-6 mb-4">
            Krishi Mantra is a revolutionary mobile app designed to assist
            farmers with real-time weather insights, personalized farming
            advice, and market trends, simplifying agriculture through
            technology.
          </p>
          <p className="font-cabin text-[#555555] text-base leading-6 mb-6">
            Discover how we blend innovation and expertise to uplift farming
            communities.
          </p>
          <a
            href="https://github.com/pratikni07/KrishiDoctor.git"
            target="_blank"
            className="unigeo inline-block text-black no-underline py-2 rounded font-bold transition hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
