import React from "react";
import project1 from "../assets/Project/project3.png";
import ButtonWithShadow from "./Buttons/ButtonWithHoverEffect";

const Projects = () => {
  return (
    <div className="w-full flex pb-10 flex-col md:flex-row">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={project1}
          alt="Deployflow Project"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-[#F9F5F2] p-6 md:p-[70px] rounded-lg font-sans">
          {/* <ButtonWithShadow /> */}
          <h2 className="unigeo text-[#333333] text-xl md:text-2xl font-bold mb-4 mt-7">
            Deployflow: Streamlined GitHub Deployments
          </h2>
          <p className="font-cabin text-[#555555] text-base leading-6 mb-4">
            Deployflow is a Vercel-inspired platform for automatic builds and
            deployments from GitHub, featuring real-time logs and instant
            deployment URLs.
          </p>
          <p className="font-cabin text-[#555555] text-base leading-6 mb-6">
            Built on Docker and AWS, it ensures secure and scalable deployments.
          </p>
          <a
            href="https://github.com/pratikni07/DeployFlow-Vercel-clone.git"
            className="inline-block text-black no-underline py-2 rounded font-bold transition hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
