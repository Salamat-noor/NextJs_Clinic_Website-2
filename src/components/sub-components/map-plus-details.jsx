import React from "react";
import * as Asset from "@/assets/contact-us-assets";
import Image from "next/image";

const MapAndDetails = (props) => {
  return (
    <div className="max-w-[363px] w-[100%] h-[auto] border border-[#F1F1F1] flex flex-col  gap-20">
      <iframe
        className="w-[100%] h-[360px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106277.44568957966!2d72.97715206797137!3d33.65275214128753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1716812925859!5m2!1sen!2s"
        height="360"
        loading="lazy"
      ></iframe>

      <div className="flex flex-col items-start gap-4">
        <h1 className=" font-semibold text-[20px]">{props.title}</h1>
        {Asset.contactUsAsset.map((data) => (
          <div key={data.id} className="flex items-start gap-4">
            <Image
              src={data.icon}
              alt="icon"
              width={24}
              className="w-[24px] h-auto my-2"
            />
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-semibold text-[1rem]">{data.title}</h3>
              <p className="font-normal text-[14px]">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapAndDetails;
