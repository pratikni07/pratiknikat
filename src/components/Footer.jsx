import React from "react";
import pratiklogo from "../assets/logo.png";
import linkedinlogo from "../assets/sociallogo/linkedinlogo.webp";
import githublogo from "../assets/sociallogo/githublogo.webp";
import instagramlogo from "../assets/sociallogo/instagramlogo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#F9F5F2] py-12 border-[#3d3d3b] border-2 ">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <img src={pratiklogo} alt="Logo" width={70} />
          <p className="unigeo text-[18px] font-bold ml-2">Pratik Nikat</p>
        </div>
        <div className="flex space-x-4 items-center">
          <a
            href="https://github.com/pratikni07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            <img src={githublogo} alt="GitHub" className="w-10 h-10" />
          </a>
          <a
            href="https://linkedin.com/in/pratiknikat"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:opacity-100 transition-opacity"
          >
            <img src={linkedinlogo} alt="LinkedIn" className="w-14 h-14" />
          </a>
          <a
            href="https://instagram.com/pratik_nikat_987"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            <img src={instagramlogo} alt="Instagram" className="w-14 h-14" />
          </a>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto mt-8 text-center">
        <p className="text-[#52514E] text-sm">
          © 2024 Pratik Nikat. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
