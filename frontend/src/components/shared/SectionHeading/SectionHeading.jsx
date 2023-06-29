import React from "react";

const SectionHeading = ({ mainTitle, subTitle, headingDescription }) => {
  return (
    <div className="mt-10 relative -z-0">
      <div className="flex items-center justify-center ">
        <h2 className="text-center text-[250px] font-playFair font-bold text-[#F0F0F0] absolute capitalize">
          {mainTitle}
        </h2>
      </div>
      <h3 className="uppercase absolute mt-16 -z-0 font-carla text-[#bfbfbf] font-bold">
        {subTitle}
      </h3>
      <h4 className="font-playFair absolute mt-[100px] -z-0 text-[34px] capitalize tracking-wide">
        {headingDescription}
      </h4>
    </div>
  );
};

export default SectionHeading;
