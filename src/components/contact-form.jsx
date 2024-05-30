import React from "react";
import SectionHeading from "./sub-components/section-heading";

const ContactForm = () => {
  return (
    <div className="w-[100%]  bg-[#FDEBD0] py-[80px]">
      <SectionHeading title={"Send Us An Inquiry"} />
      <form className="w-[100%] md:w-[90%] mx-auto py-[40px]">
        <div className="flex flex-col sm:flex-row  justify-between gap-[10px] sm:gap-[40px]">
          <div className="w-full">
            <label htmlFor="Name">
              Name: <span className=" text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              required
              className="w-full p-4 mb-4 border rounded-md shadow-#000000 shadow-md "
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone">
              Phone: <span className=" text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-4 mb-4 border rounded-md shadow-#000000 shadow-md "
            />
          </div>
        </div>

        <div>
          <label htmlFor="comment">
            Name: <span className=" text-red-500">*</span>
          </label>
          <textarea
            required
            name="comment"
            id="comment"
            className="w-full h-[140px] p-4 border rounded-md shadow-#000000 shadow-md "
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
