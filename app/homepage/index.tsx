"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Wireframe14 from "./menu";

const HomePage: React.FC = () => {
  const router = useRouter();

  const textOptions = [
    <>
      Experience the Future Empower your
      <br />
      business with{" "}
    </>,
    <>
      Unlocking Tomorrow&apos;s Potential
      <br />
      Today with our{" "}
    </>,
    <>
      Fueling a Smarter, More Connected
      <br />
      Future with our{" "}
    </>,
  ];

  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsMenuOpen(false);

    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setFlipped(true);

      setTimeout(() => {
        setActiveTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setFlipped(false);
      }, 180); // Half of 0.6s transition
    }, 3000); // 3 seconds delay; you can adjust this value

    return () => clearInterval(flipInterval);
  }, [textOptions.length]);

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('mask-group.png')` }}
    >
      {/* Use duration-150, duration-300, duration-500, duration-700, duration-1000 for 150ms, 300ms, 500ms, 700ms, or 1000ms durations, respectively.
      Timing Function (Easing): This controls the acceleration curve of the transition. Tailwind provides some easing function utilities:
ease-linear
ease-in
ease-out
ease-in-out 
Delay: This controls if the transition will have a starting delay. Tailwind provides few delay classes like delay-75, delay-100, delay-150, delay-200, delay-300, delay-500, delay-700, and delay-1000 for delays of 75ms, 100ms, 150ms, 200ms, 300ms, 500ms, 700ms, and 1000ms, respectively.}
  */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-gray-800 transform ease-in-out transition-all duration-700 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <Wireframe14 />
        <button
          className="absolute top-0 left-0 m-6 text-white text-3xl"
          onClick={handleClose}
        >
          &times;
        </button>
      </div>

      <div className="navbar absolute top-0 left-0 right-0 z-10 bg-transparent flex justify-between items-start p-0 sm:pr-5">
        <div className="relative z-20 flex flex-col items-center sm:items-start">
          <img
            className="w-32 sm:w-full max-w-xs sm:max-w-m h-auto"
            alt=""
            src="vector-7.png"
          />
          <button className="absolute top-5 left-10 z-30">
            <img
              className="w-16 sm:w-full h-3/4 object-cover"
              alt=""
              src="Logo.png"
            />
          </button>
        </div>
        <div className="flex text-white flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <ul className="menu menu-horizontal flex items-center space-x-4">
            <li>
              <div className="relative rounded-[40px] font-poppins bg-purple w-full overflow-hidden flex items-center justify-center py-2 px-4 text-center text-[13px] text-white">
                <div className="leading-[17px] ">Talk to us</div>
              </div>
            </li>
            <li>
              <button className="btn btn-square btn-ghost">
                <img
                  className="w-6 h-6 sm:w-full sm:h-[30px]"
                  alt=""
                  src="search.svg"
                />
              </button>
            </li>
            <li>
              <button onClick={toggleMenu}>
                <img
                  className="w-full h-full sm:w-full sm:h-full"
                  alt=""
                  src="menu.svg"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <main className="pt-20 sm:pt-72 px-4 sm:px-20">
        <div className="flex flex-row items-end space-x-5">
          <div className="flex flex-col space-y-9 mb-3">
            {textOptions.map((text, index) => (
              <div
                key={index}
                onClick={() => setActiveTextIndex(index)}
                className={`cursor-pointer rounded-full bg-white ${
                  activeTextIndex === index ? "w-2 h-7" : "w-3 h-3"
                }`}
              />
            ))}
          </div>
          <div className="text-3xl sm:text-5xl text-white text-center sm:text-left">
            <p
              className={`max-w-l max-h-s leading-relaxed font-poppins flip-transition ${
                flipped ? "flipped" : ""
              }`}
            >
              {textOptions[activeTextIndex]}
            </p>
            <p className="font-poppins font-bold">
              Artificial Intelligence services
            </p>
          </div>
        </div>

        <div className="text-white flex flex-col sm:flex-row justify-center sm:justify-start font-poppins pt-10 px-4 sm:px-20 space-y-4 sm:space-y-0 sm:space-x-10">
          <div className="flex flex-col items-center sm:items-start">
            <a>10K+</a>
            <a>Live users</a>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <a>19+</a>
            <a>Global Awards</a>
          </div>
        </div>
      </main>
      <div className="absolute bottom-0 right-0 p-4">
        <img
          className="w-16 h-16 sm:w-full sm:h-[87px]"
          alt=""
          src="chat.svg"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <img
          className="w-16 h-16 sm:w-full sm:h-[87px]"
          alt=""
          src="rectangle.svg"
        />
      </div>
    </div>
  );
};

export default HomePage;
