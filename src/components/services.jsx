import Image from "next/image";
import React from "react";
import * as StyleX from "@/styles/services-styles";
import Button from "./sub-components/button";
import SectionHeading from "./sub-components/section-heading";

const Services = (props) => {
  return (
    <StyleX.Services>
      <SectionHeading title={props.title} />
      <p
        id="servicesHeading"
        className="text-center  text-[20px] min-w-[80%] max-w-[50%]"
      >
        {props.text}
      </p>

      <div id="Grid-View">
        {props.cardAsset.map((data) => (
          <StyleX.Card key={data.id} className="border">
            <Image src={data.icon} alt="" width={80} height={80} />
            <h1 id="Card-Heading" className="text-[20px]">
              {data.heading}
            </h1>
            <p id="Card-Text">{data.text}</p>
            <Button title={data.btnText} />
          </StyleX.Card>
        ))}
      </div>

      <Button title={props.btnText} />
    </StyleX.Services>
  );
};

export default Services;
