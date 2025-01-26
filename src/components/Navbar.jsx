import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import pratiklogo from "../assets/logo.png";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine background color based on current route
  const getNavbarBgColor = () => {
    return location.pathname === "/resume" ? "bg-[#F7CB46]" : "bg-[#F9F5F2]";
  };

  return (
    <nav className={getNavbarBgColor()}>
      <div className="w-[90%] md:w-[80%] m-auto flex justify-between items-center h-full pt-4 md:pt-7">
        {/* Logo Section */}
        <div className="container-fluid flex items-center gap-1 text-center h-full">
          <a className="navbar-brand" href="#">
            <img src={pratiklogo} alt="Logo" width={60} md:width={70} />
          </a>
          <p className="unigeo text-[16px] md:text-[18px] font-bold">
            Pratik Nikat
          </p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none transition-transform duration-300 transform hover:scale-110"
          >
            {isMenuOpen ? (
              <X size={30} className="text-[#333333]" />
            ) : (
              <Menu size={30} className="text-[#333333]" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex justify-between items-center text-[18px] font-bold text-[#333333]">
            {navItems.map((item) => (
              <li key={item} className="group relative ml-4">
                <a
                  href={item.link}
                  className="
                    unigeo
                    flex items-center
                    py-2 px-3
                    group-hover:text-[#666666]
                    transition-all
                    duration-300
                    ease-in-out
                  "
                >
                  <ArrowRight
                    className="
                      mr-1
                      opacity-0
                      transition-all
                      duration-300
                      ease-in-out
                      group-hover:opacity-100
                      group-hover:translate-x-[-3px]
                      stroke-[2.5]
                      text-[#333333]
                    "
                    size={20}
                  />
                  <span
                    className="
                      transition-all
                      duration-300
                      ease-in-out
                      group-hover:translate-x-[3px]
                    "
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#F9F5F2] z-50 md:hidden">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 focus:outline-none transition-transform duration-300 transform hover:scale-110"
            >
              <X size={30} className="text-[#333333]" />
            </button>

            <ul className="flex flex-col items-center justify-center h-full text-[24px] font-bold text-[#333333] space-y-8">
              {navItems.map((item) => (
                <li key={item} className="group">
                  <a
                    href={item.link}
                    className="
                      unigeo
                      flex items-center
                      py-2
                      group-hover:text-[#666666]
                      transition-all
                      duration-300
                      ease-in-out
                    "
                  >
                    <ArrowRight
                      className="
                        mr-3
                        opacity-0
                        transition-all
                        duration-300
                        ease-in-out
                        group-hover:opacity-100
                        group-hover:translate-x-[-3px]
                        stroke-[2.5]
                        text-[#333333]
                      "
                      size={24}
                    />
                    <span
                      className="
                        transition-all
                        duration-300
                        ease-in-out
                        group-hover:translate-x-[3px]
                      "
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
