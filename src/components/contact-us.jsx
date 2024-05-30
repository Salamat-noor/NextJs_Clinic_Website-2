import React from "react";
import SectionHeading from "./sub-components/section-heading";
import MapAndDetails from "./sub-components/map-plus-details";
import * as StyleX from "@/styles/contact-us-styles";

const ContactUs = () => {
  return (
    <div className=" bg-[#FDEBD0] flex flex-col gap-20 py-20">
      <SectionHeading title={"Contact Us"} />

      <StyleX.WorldMapRow className="w-[90%] mx-auto">
        <MapAndDetails title={"Clinic Lorem Ipsum"} />
        <MapAndDetails title={"Clinic Lorem Ipsum"} />
        <MapAndDetails title={"Clinic Lorem Ipsum"} />
      </StyleX.WorldMapRow>
    </div>
  );
};

export default ContactUs;
