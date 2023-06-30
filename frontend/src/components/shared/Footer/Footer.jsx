import React from "react";

const Footer = () => {
  return (
    <div className="mt-32 flex flex-col items-center justify-center text-center gap-4">
      <h1 className="font-carla tracking-wide uppercase text-3xl font-bold text-neutral-700">
        Bulbul Ahmed
      </h1>
      <p className="px-26 font-carla text-lg font-medium text-neutral-600">
        Thank you for taking the time to visit my portfolio website. I value
        your feedback and welcome any inquiries or collaboration opportunities.
        Please don't hesitate to get in touch with me via email or through
        LinkedIn. I look forward to connecting with you.
      </p>
      <button className="border border-yellow-400 px-4 py-2 font-carla uppercase tracking-wider text-[#5b5757] text-sm hover:bg-yellow-400 hover:text-black duration-300 rounded-sm ml-4">
        Download CV
      </button>
      <p className="font-carla text-[#808080] mt-14 mb-4">
        © Copyright 2023 All rights reserved | BulBul Ahmed{" "}
      </p>
    </div>
  );
};

export default Footer;
