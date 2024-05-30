"use client";
import React from "react";
import * as Asset from "@/assets/hero-assets";
import * as StyleX from "@/styles/hero-style";
import Image from "next/image";

const Hero = () => {
  return (
    <StyleX.Hero className="relative">
      <Image
        src={Asset.heroBG}
        alt=""
        width={100}
        height={100}
        className="w-full  h-auto filter-1"
      />

      <StyleX.textContent className="absolute text-white  ">
        <h1 className="text-[1.5rem]  sm:text-[2rem] md:text-[2.6rem] lg:text-[3.5rem] xl:text-[4rem] font-normal italic">
          HEALTH IS
        </h1>
        <h1 className="text-[1.5rem]  sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[74px] font-bold">
          LOVE, COMPASSION
        </h1>
        <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.5rem] xl:text-[4rem] font-normal italic">
          AND CARE
        </h1>
      </StyleX.textContent>
    </StyleX.Hero>
  );
};

export default Hero;
