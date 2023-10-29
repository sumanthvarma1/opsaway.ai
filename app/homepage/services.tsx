"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import HomePage from "./firstContainer";
import SecondContainer from "./secondContainer";
import ThirdContainer from "./thirdContainer";
import FourthContainer from "./fourthContainer";

const RectangleContainer: NextPage = () => {
  return (
    // <div className="relative bg-bgimagebackground w-full h-[6348px] overflow-hidden text-left text-21xl text-white font-heading-h1-medium">
    <div className="relative bg-white w-full h-full overflow-hidden text-black font-heading-h1-medium">
      <HomePage />

      <SecondContainer />
      <ThirdContainer/>
      <FourthContainer/>
    </div>
  );
};

export default RectangleContainer;
