import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import SectionHeading from "./sub-components/section-heading";

const MARQUEE = (props) => (
  <CustomMarquee
    $theme={props.theme}
    className="w-full h-auto py-20 px-[1%] md:px-[5%]"
  >
    <div className="my-10">
      <SectionHeading title={props.title} />
    </div>

    <Marquee pauseOnHover={true} speed={50}>
      {props.asset.Asset.map((data) => (
        <div key={data.id} className={`m-3`}>
          <Image
            src={data.img}
            alt={data.id}
            priority="true"
            className={`${props.mode === "two" ? `w-[60%] mx-auto` : ""}`}
          />
        </div>
      ))}
    </Marquee>
  </CustomMarquee>
);

export default MARQUEE;

const CustomMarquee = styled.div`
  background-color: ${(props) =>
    props.$theme === "light" ? `#fff` : `#fdebd0`};
`;
