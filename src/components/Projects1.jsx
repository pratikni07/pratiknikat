import React from "react";
import project1 from "../assets/Project/10.png";
import ButtonWithShadow from "./Buttons/ButtonWithHoverEffect";

const Projects1 = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-[#F9F5F2] p-6 md:p-[70px] rounded-lg font-sans">
          {/* <ButtonWithShadow /> */}
          <h2 className="unigeo text-[#333333] text-xl md:text-[28px] font-bold mb-4 mt-7">
            Study Notion: A MERN-based EdTech Platform
          </h2>
          <p className="font-cabin text-[#555555] text-base leading-6 mb-4">
            Study Notion is a feature-rich EdTech web application built with the
            MERN stack, designed for secure user authentication, course
            management, and progress tracking.
          </p>
          <p className="font-cabin text-[#555555] text-base leading-6 mb-6">
            With Razorpay integration and intuitive dashboards for instructors
            and students, it provides a seamless learning and teaching
            experience.
          </p>
          <a
            href="https://github.com/pratikni07/studynotion.git"
            target="_blank"
            className="unigeo inline-block text-black no-underline py-2 rounded font-bold transition hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={project1}
          alt="Study Notion Project"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Projects1;
