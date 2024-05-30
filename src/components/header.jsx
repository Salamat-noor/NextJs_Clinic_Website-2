"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as StyleX from "@/styles/header-styles";
import * as Asset from "@/assets/header-assets";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <StyleX.Header className="flex items-center justify-between px-[5%] md:px-[80px] w-[100%] h-[50px] sm:h-[80px] md:h-[100px] text-white">
      <StyleX.LogoDiv className="flex items-center gap-[10px] md:gap-[20px]">
        <Image
          src={Asset.headerLogo}
          alt=""
          width={68}
          height={68}
          priority="true"
          className="w-[40px] sm:w-[50px] md:w-[68px] h-[40px] sm:h-[50px] md:h-[68px]"
        />
        <h3 className="font-semibold text-[12px] md:text-[16px]">LOGO</h3>
      </StyleX.LogoDiv>

      {Asset.headerLinks && (
        <div className="hidden lg:block">
          <StyleX.Links className="flex items-center gap-[70px]">
            {Asset.headerLinks.map((data) => (
              <li key={data.id} className=" font-semibold">
                {data.title}
              </li>
            ))}
          </StyleX.Links>
        </div>
      )}

      <div className="block lg:hidden">
        {toggleMenu === true && (
          <FaBars
            size={30}
            color="white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu === false && (
          <FaTimes
            className="hidden md:block"
            size={30}
            color="white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
      </div>

      {/* //! ___________MOBILE VIEW LISTS____________ !// */}
      {Asset.headerLinks && (
        <StyleX.Links
          className={`flex flex-col md:flex-row fixed md:absolute z-[-1] left-0 top-[0%] md:top-[100%] w-full ${
            toggleMenu ? `h-0` : "h-[100vh] md:h-full"
          } justify-center items-center gap-[70px] bg-opacity-80 bg-black lg:hidden`}
        >
          <FaTimes
            className="absolute top-[10%] right-[5%] block md:hidden"
            size={30}
            color="white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />

          {Asset.headerLinks.map((data) => (
            <li key={data.id} className=" font-semibold">
              {data.title}
            </li>
          ))}
        </StyleX.Links>
      )}
    </StyleX.Header>
  );
};

export default Header;
