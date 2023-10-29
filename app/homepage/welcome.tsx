import React from "react";
import { NextPage } from "next";
import ImageShape from "./imageShape";

const Welcome: NextPage = () => {
    return (
        <div className="relative rounded-2xl h-[446px] bg-darkturquoise w-full overflow-hidden flex flex-row items-start justify-start pt-[59px] pb-[121.171875px] pr-[475px] pl-[55px] box-border text-left text-[36px] text-white font-poppins bg-lightblue">   
      <div className="absolute my-0 mx-[!important] h-[calc(100%_-_0.36px)] w-full top-[0px] right-[0px] bottom-[100px] left-[0px] z-[0]">
        <img
          className="absolute transform -rotate-90 left-[1000px]"
          alt=""
          src="/Vector.png"
        />
        <ImageShape/>
        <div className="absolute top-[59px] left-[55px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative w-[810px] h-[174px]">
            <div className="absolute top-[-1px] left-[0px] leading-[48.24px]">
              <span>{`Welcome to the `}</span>
              <b>Future of Intelligence</b>
            </div>
            <div className="absolute top-[-1px] left-[533.17px] text-[12px] font-inter">
              <p className="m-0">&nbsp;</p>
            </div>
            <div className="absolute top-[46.83px] left-[0px] text-[22px] leading-[39px] inline-block w-[784px] h-[127px]">
              We are at the forefront of the AI revolution, where innovation
              meets intelligence. Explore the limitless possibilities of
              Artificial Intelligence and discover how it's shaping our world.
            </div>
          </div>
          <div className="rounded-[40px] bg-white overflow-hidden flex flex-row items-start justify-start pt-[15px] px-8 pb-[17px] text-center text-[16px] text-darkslategray">
            <div className="relative w-[147.7px] h-[27.19px]">
              <div className="absolute top-[2px] left-[calc(50%_-_70.85px)] leading-[27.2px] text-black">
                View Services
              </div>
              <img
                className="absolute top-[9px] left-[127.7px] w-3.5 h-3 overflow-hidden"
                alt=""
                src="/frame1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export default Welcome;

  
    

