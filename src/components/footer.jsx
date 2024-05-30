import React from "react";
import * as Asset from "@/assets/footer_assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-[#77513E] h-auto lg:h-[402px] flex items-center text-white">
      <div className="flex gap-y-16 items-start justify-between flex-wrap w-[98%] md:w-[90%] mx-auto text-center md:text-left">
        <div className="flex items-center flex-col gap-6 w-[100%] md:w-[367px]">
          <div className="flex items-center">
            <Image src={Asset.ColOneAsset.icon} alt="" />
            <h3 className=" font-semibold text-[20px]">
              {Asset.ColOneAsset.title}
            </h3>
          </div>
          <div>
            <p className=" font-normal text-[20px]">{Asset.ColOneAsset.text}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-6">
            <h3 className=" font-semibold text-[20px] mb-3">
              {Asset.CoLTwoAsset.heading}
            </h3>
            <h4 className=" font-normal text-[16px]">
              {Asset.CoLTwoAsset.text}
            </h4>
            <h4 className=" font-normal text-[16px]">
              {Asset.CoLTwoAsset.text2}
            </h4>
            <h4 className=" font-normal text-[16px]">
              {Asset.CoLTwoAsset.text3}
            </h4>
            <h4 className=" font-normal text-[16px]">
              {Asset.CoLTwoAsset.text4}
            </h4>
          </div>
        </div>

        <div className="flex flex-col gap-6 basis-[100%] md:basis-[0%]">
          <div>
            <h3 className=" font-semibold text-[20px]  mb-3">Follow Us</h3>
          </div>
          <div className="flex items-center gap-3">
            {Asset.icons.map((data) => (
              <div
                key={data.id}
                className="border w-[40px] h-[40px] flex items-center justify-center"
              >
                <Image
                  src={data.src}
                  alt={data.id}
                  className={`${
                    data.id === 1
                      ? `w-[12.58px] h-[24px]`
                      : data.id === 2
                      ? `w-[16.67px] h-[13.57px]`
                      : data.id === 3
                      ? `w-[16.67px] h-[16.67px]`
                      : data.id === 3
                      ? `w-[16.6px] h-[15.86px]`
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
