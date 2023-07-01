import React from "react";

const SectionHeading = ({ mainTitle, subTitle, headingDescription }) => {
  return (
    <div className="mt-10 relative -z-0">
      <div data-aos="zoom-in" className="flex items-center justify-center ">
        <h2 className="text-center text-[80px] md:text-[250px] font-playFair font-bold text-[#F0F0F0] absolute capitalize">
          {mainTitle}
        </h2>
      </div>
      <h3
        data-aos="fade-right"
        className="uppercase absolute mt-8 md:mt-16 -z-0 font-carla text-[#bfbfbf] font-bold">
        {subTitle}
      </h3>
      <h4
        data-aos="fade-left"
        className="font-playFair absolute hidden md:block md:mt-[100px] -z-0  md:text-[26px] lg:text-[34px] capitalize tracking-wide">
        {headingDescription}
      </h4>
    </div>
  );
};

export default SectionHeading;
