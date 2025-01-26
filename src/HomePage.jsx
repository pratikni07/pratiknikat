import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import Projects1 from "./components/Projects1";
import Projects3 from "./components/Project3";
import ContactForm from "./components/ContactForm";
import Experince from "./components/Experince";
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer";
import loadingvideo from "./assets/loading.mp4";

// Loading component
const Loading = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <video className="w-28 h-28" autoPlay loop muted src={loadingvideo} />
  </div>
);

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second loading time

    // Cleanup timer
    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <WhatIDo />
      <Experince />
      <div className="bg-[#FFFFFF]">
        <h2 className="text-[30px] md:text-[50px] text-[#282825] font-extrabold text-center pb-12 md:mt-20">
          Featured projects
        </h2>
      </div>
      <div className="bg-[#F9F5F2]">
        <Projects />
        <Projects1 />
        <Projects3 />
      </div>
      <div className="bg-[#F9F5F2] ">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
