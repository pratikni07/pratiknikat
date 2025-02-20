import React from "react";
import experince from "../assets/banner.png";
import mobileview from "../assets/bannermobile.png";

const Experience = () => {
  return (
    <div className="w-[90%] m-auto ">
      <div className="bg-white">
        {/* Desktop image - hidden on mobile screens */}
        <img
          src={experince}
          alt="Desktop Experience"
          className="hidden md:block w-full py-12"
        />
        {/* Mobile image - hidden on screens larger than mobile */}
        <img
          src={mobileview}
          alt="Mobile Experience"
          className="block md:hidden w-full"
        />
      </div>
    </div>
  );
};

export default Experience;
