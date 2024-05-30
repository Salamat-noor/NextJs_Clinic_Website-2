import React from "react";
import styled from "styled-components";
import * as Asset from "@/assets/meet-team-asset";
import Image from "next/image";
import SectionHeading from "./sub-components/section-heading";

const MeetTeam = () => {
  return (
    <div className="w-[100%] xl:w-[90%] h-auto flex flex-col gap-16 mx-auto py-20">
      <div className="w-full h-auto flex flex-col items-center text-center">
        <SectionHeading title={Asset.meetTeamAssetOne.heading} />
        <p className="w-[90%] lg:w-[80%] xl:w-[70%] text-[#565656] font-normal text-[20px]">
          {Asset.meetTeamAssetOne.text}
        </p>
      </div>

      <Cards className="w-full">
        {Asset.meetTeam.map((data) => (
          <div id="card" key={data.id} className="max-w-[305px] p-3">
            <Image
              src={data.img}
              alt={data.id}
              width={100}
              height={100}
              className="w-full h-auto"
              priority="true"
            />
            <h1 className=" font-semibold text-[20px] my-1">{data.title}</h1>
            <h2 className="bioheading">{data.profession}</h2>
            <p className="bioText">{data.intro}</p>
          </div>
        ))}
      </Cards>
    </div>
  );
};

export default MeetTeam;

const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }

  #card {
    background-color: #fdebd0;
    border-radius: 8px;

    .bioheading {
      font-family: Poppins;
      font-weight: 500;
      font-size: 18px;
    }
    .bioText {
      font-family: Poppins;
      font-weight: 400;
      font-size: 18px;
      color: #3c4959;
      margin-top: 1rem;
    }
  }
`;
