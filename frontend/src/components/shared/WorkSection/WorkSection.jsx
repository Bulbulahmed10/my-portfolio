import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const bestProjectsData = [
  {
    id: "s5df456s4fds564f",
    projectName: "Let's Talk School",
    websiteImage: "https://i.ibb.co/WBCVcB2/Screenshot-31.png",
    githubLink: "https://github.com/Bulbulahmed10/lets-talk-mern-client",
    liveSiteLink: "https://lets-talk-school-35e1a.web.app/",
  },
  {
    id: "ds6gf76dsf7ds687f",
    projectName: "Chefscout",
    websiteImage: "https://i.ibb.co/BB6m8Lg/Screenshot-32.png",
    githubLink: "https://github.com/Bulbulahmed10/chefscout-mern-firebase",
    liveSiteLink: "https://chefscout-client-assignment.web.app/",
  },
  {
    id: "dgdfs5d64f6ds4f5d",
    projectName: "Toyland",
    websiteImage: "https://i.ibb.co/hD9YrwS/Screenshot-33.png",
    githubLink: "https://github.com/Bulbulahmed10/toyland-mern",
    liveSiteLink: "https://toyland-dc9cf.web.app/",
  },
  {
    id: "fsd6f7ds6f41ds56445",
    projectName: "Programming Hero",
    websiteImage: "https://i.ibb.co/G9RVjjR/Screenshot-34.png",
    githubLink: "https://github.com/Bulbulahmed10/programming-hero-website",
    liveSiteLink: "https://programming-hero-website.netlify.app/",
  },
];

const WorkSection = () => {
  return (
    <div className="relative md:pl-8 mt-24 md:mt-52">
      <div className="absolute hidden md:block left-2">
        <p className="font-carla uppercase tracking-[16px] text-sm rotate-90 relative origin-top-left">
          projects
        </p>
        <p className="absolute hidden md:block rotate-90 mt-[190px] -ml-[43px] bg-black w-16 h-[1px] "></p>
      </div>
      <div>
        {bestProjectsData.map((singleProject) => (
          <div
            data-aos="fade-up"
            key={singleProject.id}
            className="bg-gray-200 p-1 relative group mb-8">
            <img
              className="z-0 hover:scale-110 duration-300"
              src={singleProject.websiteImage}
              alt=""
            />
            <div className="w-full md:w-52 lg:w-60 h-24 md:h-32 z-20 md:bg-white  absolute top-[50%] md:left-[35%] lg:left-[40%] group-hover:scale-110 transform transition-transform duration-300 rounded-md">
              <div className="flex flex-col items-center justify-center mt-4">
                <p className="hidden md:block md:text-xl lg:text-2xl font-semibold font-playFair">
                  {singleProject.projectName}
                </p>
                <div className="flex gap-4 mt-4">
                  <Link
                    to={singleProject.githubLink}
                    target="_blank"
                    className="bg-yellow-500 p-1 md:p-2 rounded-full"
                    title="GitHub Repository">
                    <BsGithub className="md:text-xl" />
                  </Link>
                  <Link
                    to={singleProject.liveSiteLink}
                    target="_blank"
                    className="bg-yellow-500 p-1 md:p-2 rounded-full"
                    title="Live Website">
                    <CgWebsite className="md:text-xl" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute z-10 bg-[#f0f0f000] group-hover:bg-[#00000057] w-full h-full top-0 left-0 right-0 bottom-0 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      <p className="text-center font-carla md:text-xl">
        <Link
          className="bg-yellow-400 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 duration-200"
          to="/projects">
          See More Projects
        </Link>
      </p>
    </div>
  );
};

export default WorkSection;
