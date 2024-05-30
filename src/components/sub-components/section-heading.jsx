import React from "react";
import Image from "next/image";
import headingShade from "@/../public/images/servicesHeadingShade.svg";

const SectionHeading = (props) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-black text-[48px] font-semibold">
        {props.title}
      </h1>
      <Image src={headingShade} alt="shade" priority="true" />
    </div>
  );
};

export default SectionHeading;
