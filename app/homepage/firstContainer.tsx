"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import router from 'next/router' instead of 'next/navigation'
import MenuBar from "./menu";
import Chat from "../../components/chat";
import { Button } from "../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { MessageCircle } from "lucide-react";

const HomePage: React.FC = () => {
  const router = useRouter();

  const textOptions = [
    "Experience the Future Empower your business with",
    "Unlocking Tomorrow's Potential Today with our",
    "Fueling a Smarter, More Connected Future with our",
  ];

  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setActiveTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setFlipped(false);
      }, 180);
    }, 3000);

    return () => clearInterval(flipInterval);
  }, [textOptions.length]);

  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url('mask-group.png')` }}
    >
      <div
        className={`fixed top-0 right-0 w-full h-full transform ease-in-out transition-all duration-700 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <MenuBar isMenuOpened={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent flex justify-between items-start p-0 sm:pr-5">
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
      </nav>

      <main className="pt-20 sm:pt-72 px-4 sm:px-20 flex-grow">
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

      <footer className="flex justify-between items-end w-full p-4">
        <div className="flex-grow"></div>{" "}
        {/* Empty div to push other items to the center and right */}
        {/* <button>
          <img
            className="w-16 h-16 sm:w-full sm:h-[87px]"
            alt="Rectangle Icon"
            src="rectangle.svg"
          />
        </button> */}
        <div className="flex-grow"></div>{" "}
        {/* Empty div to push other items to the center and right */}
        {/* <button className="flex justify-end items-end">
          <img
            className="w-16 h-16 sm:w-full sm:h-[87px]"
            alt="Chat Icon"
            src="chat.svg"
          />
        </button> */}
        <div className="flex-grow">
          <div className="flex items-center justify-center">
            <Popover>
              <PopoverContent align="start" className="w-[440px] mr-4">
                <Chat />
              </PopoverContent>
              <PopoverTrigger asChild className="fixed bottom-4 right-4">
                <Button
                  variant="outline"
                  className="rounded-full w-20 h-20 bg-white  aspect-square hover:bg-white-700"
                  style={{ backgroundImage: `url(./chat.svg)` }}
                >
                  {/* <MessageCircle size={40} className="text-white" /> */}
                </Button>
              </PopoverTrigger>
            </Popover>
          </div>
        </div>{" "}
      </footer>
    </div>
  );
};

export default HomePage;
