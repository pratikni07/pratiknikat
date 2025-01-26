import React from "react";
import Navbar from "./components/Navbar";
import resumeimg from "./assets/resumeimg.png";
import resumevideo from "./assets/resumevideo.mp4";

const Resume = () => {
  return (
    <div className="bg-[#F7CB46] min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row w-[90%] mx-auto py-14 gap-8 items-start">
        {/* Video section for larger screens */}
        <div className="md:w-[45%] flex flex-col justify-start items-start gap-8 hidden md:flex">
          <video
            className="w-[400px] h-[400px] object-cover rounded-full"
            src={resumevideo}
            autoPlay
            loop
            muted
          />
        </div>

        {/* Main resume content */}
        <div className="md:w-[55%] w-full relative">
          <div className="bg-white rounded-2xl border-2 border-[#242424] shadow-[1px_1px_0px_#242424] transition-all duration-300 transform hover:shadow-[3px_3px_0px_#242424] hover:translate-x-[-4px] hover:translate-y-[-4px] relative">
            <img src={resumeimg} className="rounded-3xl" alt="Resume Preview" />

            {/* Download Resume Button */}
            <div className="absolute top-4 right-4">
              <button
                className="bg-[#242424] text-white py-2 px-4 rounded-lg shadow-[1px_1px_0px_#242424] transition-all duration-300 transform hover:shadow-[3px_3px_0px_#242424] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1z3un4rtIvu0Kcq1XVCgxrLLx0lgH4TB2/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
