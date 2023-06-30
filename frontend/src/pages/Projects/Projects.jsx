import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import SectionHeading from "../../components/shared/SectionHeading/SectionHeading";
import projectsData from "../../projects-data";

const Projects = () => {
  return (
    <div>
      <SectionHeading
        mainTitle="projects"
        subTitle="My Projects"
        headingDescription="All available live site i have created"
      />
      <div className="relative pl-16 mt-52">
        <div className="absolute left-2">
          <p className="font-carla uppercase tracking-[16px] text-sm rotate-90 relative origin-top-left">
            projects
          </p>
          <p className="absolute rotate-90 mt-[190px] -ml-[43px] bg-black w-16 h-[1px] "></p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {projectsData.map((singleProject) => (
            <div
              key={singleProject.id}
              className="bg-gray-200 p-1 relative group mb-8">
              <img
                className="z-0 hover:scale-110 duration-300"
                src={singleProject.websiteImage}
                alt=""
              />
              <div className="w-60 h-32 z-20 bg-white absolute top-[50%] left-[30%] group-hover:scale-110 transform transition-transform duration-300 rounded-md">
                <div className="flex flex-col items-center justify-center mt-4">
                  <p className="text-2xl font-semibold font-playFair">
                    {singleProject.projectName}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <Link
                      to={singleProject.githubLink}
                      target="_blank"
                      className="bg-yellow-500 p-2 rounded-full"
                      title="GitHub Repository">
                      <BsGithub className="text-xl" />
                    </Link>
                    <Link
                      to={singleProject.liveSiteLink}
                      target="_blank"
                      className="bg-yellow-500 p-2 rounded-full"
                      title="Live Website">
                      <CgWebsite className="text-xl" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute z-10 bg-[#f0f0f000] group-hover:bg-[#00000057] w-full h-full top-0 left-0 right-0 bottom-0 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
