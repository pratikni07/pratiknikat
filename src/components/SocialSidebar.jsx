import React from "react";
import { FaLinkedin } from "react-icons/fa";
import linkedinlogo from "../assets/sociallogo/linkedinlogo.webp";
import githublogo from "../assets/sociallogo/githublogo.webp";
import instagramlogo from "../assets/sociallogo/instagramlogo.webp";
const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 w-16 bg-[#22A094] border-black  rounded-l-2xl  shadow-lg z-50">
      <div className="flex flex-col cursor-pointer items-center justify-center space-y-4 py-4 ">
        <a href="https://www.linkedin.com/in/pratiknikat/" target="_blank">
          <img src={linkedinlogo} width={59} />
        </a>

        <a href="https://github.com/pratikni07">
          <img src={githublogo} width={40} />
        </a>

        <a href="https://www.instagram.com/pratik_nikat_987/">
          <img src={instagramlogo} width={50} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
