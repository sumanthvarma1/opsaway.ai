import type { NextPage } from "next";

const Tech: NextPage = () => {
  return (
    <div className="relative bg-gray w-full h-[700px] left-[70px] top-[40px]">
      <div className="relative text-15xl font-medium font-heading-h1-medium text-left flex items-center w-[300px] h-[89px] ">
        <span className="[line-break:anywhere] w-full">
          <span className="text-purple">{`Tech enthusiasts at `}</span>
          <span className="text-grey">the heart of it.</span>
        </span>
      </div>
      <div className="absolute text-[16px] leading-[30px] font-poppins text-black text-left flex items-center w-[513px] h-[135px] top-[120px]">
        At OpsAway.Ai, we harness the transformative power of Artificial
        Intelligence and Machine Learning to unlock unprecedented value for
        businesses. Our dedication to excellence, innovation, and sustainable
        technology solutions sets us apart in the fast-evolving world of AI and
        ML.
      </div>
      <div className="absolute w-full h-[300px] flex flex-row flex-wrap items-start justify-start gap-[23px] left-[800px] top-[0px]">
        <div className="relative bg-lightgray w-[179px] h-[189px]" />
        <div className="relative bg-lightgray w-[179px] h-[189px]" />
        <div className="relative bg-lightgray w-[179px] h-[189px]" />
      </div>
      <div className="absolute w-full h-[300px] flex flex-row flex-wrap items-start justify-start gap-[23px] left-[800px] top-[210px]">
        <div className="relative bg-lightgray w-[179px] h-[189px]" />
        <div className="relative bg-lightgray w-[179px] h-[189px]" />
        <div className="relative bg-lightgray w-[179px] h-[189px]" />
      </div>
      <div className="relative bg-purple w-61 h-[80px] top-[350px] left-[900px]" />
      <div className="relative  w-61 h-[73px] top-[300px] left-[920px] text-white">
        Browse all the projects
      </div>
    </div>
  );
};

export default Tech;
