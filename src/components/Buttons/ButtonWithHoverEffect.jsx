import React from "react";
import { Link } from "react-router-dom";

const ButtonWithShadow = () => {
  return (
    <div className="flex ">
      <a href="https://www.linkedin.com/in/pratiknikat/" target="_blank">
        <button className="bg-[#F4D06F] text-[#242424] font-semibold px-8 py-4 rounded-lg border-2 border-[#242424] shadow-[6px_6px_0px_#242424] transition-all duration-300 transform hover:shadow-[10px_10px_0px_#242424] hover:translate-x-[-4px] hover:translate-y-[-4px]">
          HIRE ME
        </button>
      </a>
    </div>
  );
};

export default ButtonWithShadow;
