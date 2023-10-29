import type { NextPage } from "next";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
interface MenuBarProps {
  isMenuOpened: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuBar: NextPage<MenuBarProps> = ({ isMenuOpened, setIsMenuOpen }) => {
  const onServicesTextClick = useCallback(() => {
    // Please sync "Wireframe - 13" to the project
  }, []);

  const onClicked = () => {
    setIsMenuOpen(false);
  };

  return (
    isMenuOpened && (
      <div className="relative bg-darkgray w-full h-full overflow-hidden text-left text-2xl text-white font-poppins">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-full">
          <div className="absolute top-[0px] left-[0px] bg-cyan-800 w-3/4 h-full" />
          <div className="absolute top-[0px] left-[988px] bg-darkslategray w-1/4 h-full" />
        </div>
        <div className="absolute top-[172px] left-[84px] flex flex-col items-center justify-start gap-[25px]">
          <img className="relative w-[820px] h-px" alt="" src="/vector-5.svg" />
          <div className="flex flex-col items-center justify-start gap-[5px]">
            <div className="flex flex-row items-center justify-start">
              <div className="relative w-[749.33px] h-72">
                <b
                  className="absolute top-[0px] left-[1.33px] leading-[50px] flex items-center w-[693px] cursor-pointer"
                  onClick={onServicesTextClick}
                >
                  Services
                </b>
                <img
                  className="absolute top-[13px] left-[725.33px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="plus.svg"
                />
                <div className="absolute top-[4px] left-[0px] bg-gainsboro w-[317px] h-[284px]" />
                <div className="absolute top-[55px] left-[6.67px] text-[17px] leading-[43px] inline-block w-[494px] h-56">
                  <p className="m-0">Consulting and Digital Services</p>
                  <p className="m-0">Experience and Design</p>
                  <p className="m-0">Software Engineering</p>
                  <p className="m-0">Platforms and Cloud</p>
                  <p className="m-0">Data and Insights</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[31px]">
              <b className="relative leading-[50px] flex items-center w-[693px] shrink-0">
                Industries
              </b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="plus.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[31px]">
              <b className="relative leading-[50px] flex items-center w-[693px] shrink-0">
                Our work
              </b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="plus.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[31px]">
              <b className="relative leading-[50px] flex items-center w-[693px] shrink-0">
                About
              </b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="plus.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[31px]">
              <b className="relative leading-[50px] flex items-center w-[693px] shrink-0">
                Insights
              </b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="plus.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[31px]">
              <b className="relative leading-[50px] flex items-center w-[693px] shrink-0">
                Contact
              </b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="plus.svg"
              />
            </div>
          </div>
          <img className="relative w-[820px] h-0" alt="" src="/vector-6.svg" />
        </div>
        <div className="absolute top-[98px] left-[120.5px] flex flex-row items-end justify-start gap-[22px]">
          <b className="relative leading-[50px] flex items-center w-[693px] shrink-0">{`| `}</b>
          <div className="flex flex-row items-start justify-start p-2.5">
            <img
              className="relative w-[32px] h-[32px]"
              alt=""
              src="search.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] hidden flex-col items-start justify-start gap-[10px] text-sm text-dimgray">
          <div className="relative bg-color w-[1440px] h-[115px] z-[0]" />
          <div className="my-0 mx-[!important] absolute top-[14px] left-[60px] flex flex-row items-center justify-center gap-[33px] z-[1]">
            <img
              className="relative w-[109px] h-[54.82px] object-cover"
              alt=""
              src="/logo@2x.png"
            />
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-start py-[19.953125px] px-0 gap-[30px]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[7px]">
                  <b className="relative leading-[16.1px]">Products</b>
                  <img
                    className="relative w-[7px] h-[3.96px]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[7px]">
                  <b className="relative leading-[16.1px]">Services</b>
                  <img
                    className="relative w-[7px] h-[3.96px]"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[7px]">
                  <b className="relative leading-[16.1px]">Resources</b>
                  <img
                    className="relative w-[7px] h-[3.96px]"
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
              </div>
              <div className="w-[462px] flex flex-row items-center justify-start py-[19.953125px] px-0 box-border gap-[30px] opacity-[0]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
                  <b className="relative leading-[16.1px]">Products</b>
                  <img
                    className="relative w-[7px] h-[3.96px]"
                    alt=""
                    src="/vector4.svg"
                  />
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
                  <b className="relative leading-[16.1px]">Services</b>
                  <img
                    className="relative w-[7px] h-[3.96px]"
                    alt=""
                    src="/vector5.svg"
                  />
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
                  <b className="relative leading-[16.1px]">Resources</b>
                  <img
                    className="relative w-[7px] h-[3.96px]"
                    alt=""
                    src="/vector6.svg"
                  />
                </div>
              </div>
              <div className="w-[275px] flex flex-row items-center justify-center pt-[26.953125px] pb-[28.046875px] pr-[9.25px] pl-2.5 box-border gap-[19.28px]">
                <b className="relative leading-[16.1px]">Contact sales</b>
                <b className="relative leading-[16.1px]">Log in</b>
              </div>
              <div className="rounded-21xl bg-color1 overflow-hidden flex flex-row items-start justify-start pt-[11.5px] pb-[12.5px] pr-[18.270000457763672px] pl-[27.25px] text-center text-smi text-color">
                <div className="relative w-[97.48px] h-[17px]">
                  <b className="absolute top-[0px] left-[calc(50%_-_59.74px)] leading-[17px]">
                    Join our Team
                  </b>
                  <img
                    className="absolute top-[3px] left-[calc(50%_+_42.26px)] w-3 h-2.5 overflow-hidden"
                    alt=""
                    src="/frame.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[105px] left-[1241px] flex flex-col items-start justify-start gap-[88px] text-base">
          <div
            className="overflow-hidden flex flex-row items-start justify-start p-[15px] cursor-pointer"
            onClick={() => {}}
          >
            <img
              className="relative w-10 h-10"
              alt=""
              src="window-close.svg"
              onClick={onClicked}
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <b className="relative leading-[43px] inline-block w-[157px] h-[45px] shrink-0">
              Have an Idea?
            </b>
            <b className="relative text-[32px] leading-[43px] inline-block w-[333px] h-[99px] shrink-0">
              <p className="m-0">{`Let's built best `}</p>
              <p className="m-0">Product for people</p>
            </b>
            <div className="relative w-[337px] h-[81px]">
              <b className="absolute top-[0px] left-[49px] leading-[43px] inline-block w-72 h-[79px]">
                <p className="m-0">+64 220675411</p>
                <p className="m-0">Info@opsaway.ai</p>
              </b>
              <div className="absolute top-[4px] left-[0px] flex flex-row items-start justify-start p-1.5">
                <img
                  className="relative w-[21px] h-[18px]"
                  alt=""
                  src="telephone.svg"
                />
              </div>
              <div className="absolute top-[51px] left-[0px] flex flex-row items-start justify-start p-1.5">
                <img
                  className="relative w-[21px] h-[18px]"
                  alt=""
                  src="mail.svg"
                />
              </div>
            </div>
            <div className="relative w-24 h-[33px] text-center text-smi text-color1">
              <div className="absolute top-[-23px] left-[-1144px] bg-color w-[1440px] h-24 hidden" />
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start">
                <div className="rounded-21xl bg-color overflow-hidden flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative rounded-[40px] font-poppins bg-white w-[100px] font-bold overflow-hidden flex items-center justify-center py-2 px-4 text-center text-[13px] text-purple">
                    <div className="leading-[17px] ">Talk to us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MenuBar;
