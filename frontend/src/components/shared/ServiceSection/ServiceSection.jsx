import { useEffect, useState } from "react";
import "./progressbar.css";
import VisibilitySensor from "react-visibility-sensor";

const FrontendSkillData = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Tailwind CSS" },
  { id: 5, name: "Bootstrap" },
  { id: 6, name: "React JS" },
  { id: 7, name: "Next JS" },
  { id: 8, name: "Firebase" },
  { id: 9, name: "Daisy UI" },
];
const BackendSkillData = [
  { id: 1, name: "Node JS" },
  { id: 2, name: "Express JS" },
  { id: 3, name: "MongoDB" },
  { id: 4, name: "JWT" },
  { id: 5, name: "Restful API" },
];
const ToolsSkillData = [
  { id: 1, name: "VS Code" },
  { id: 2, name: "Figma" },
  { id: 3, name: "Canva" },
  { id: 4, name: "Postman" },
  { id: 5, name: "MongoDB Compass" },
];

const skillPercentage = [
  { id: 343434, name: "HTML", done: 95 },
  { id: 5654, name: "CSS", done: 90 },
  { id: 43543434, name: "JavaScript", done: 75 },
  { id: 34565434, name: "Tailwind CSS", done: 95 },
  { id: 3456563434, name: "Bootstrap", done: 80 },
  { id: 345654634, name: "React", done: 85 },
  { id: 3435645543434, name: "Firebase", done: 75 },
  { id: 3434676734, name: "Express", done: 80 },
  { id: 3787634, name: "MongoDB", done: 90 },
  { id: 453454334, name: "TypeScript", done: 50 },
  { id: 435557634, name: "Next JS", done: 65 },
  { id: 33453545, name: "JWT", done: 95 },
];

const Progress = ({ done, isVisible, skillName }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (isVisible) {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }
  }, [isVisible, done]);

  return (
    <div className="progress">
      <div className="progress-done text-black " style={style}>
        {skillName} {done}%
      </div>
    </div>
  );
};

const ServiceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };
  return (
    <div>
      <div className="relative pl-16 mt-52">
        <div className="absolute left-2">
          <p className="font-carla uppercase tracking-[16px] text-sm rotate-90 relative origin-top-left">
            services
          </p>
          <p className="absolute rotate-90 mt-[190px] -ml-[43px] bg-black w-16 h-[1px] "></p>
        </div>
        <div className="grid grid-cols-4">
          <div>
            <h2 className="font-carla text-[#000000cc] font-semibold">
              01 - Frontend Development
            </h2>
            <ul className="list-disc mt-2">
              {FrontendSkillData.map((skill) => (
                <li key={skill.id} className="font-carla text-[#808080] ml-4">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-carla text-[#000000cc] font-semibold">
              02 - Backend Development
            </h2>
            <ul className="list-disc mt-2">
              {BackendSkillData.map((skill) => (
                <li key={skill.id} className="font-carla text-[#808080] ml-4">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-carla text-[#000000cc] font-semibold">
              03 - Tools
            </h2>
            <ul className="list-disc mt-2">
              {ToolsSkillData.map((skill) => (
                <li key={skill.id} className="font-carla text-[#808080] ml-4">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-carla text-[#000000cc] font-semibold">
              04 - Programming Language
            </h2>
            <ul className="list-disc mt-2">
              <li className="font-carla text-[#808080] ml-4">JavaScript</li>
              <li className="font-carla text-[#808080] ml-4">TypeScript</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap mt-4">
          {skillPercentage.map((singleSkillPercentage) => (
            <div key={singleSkillPercentage.id}>
              <VisibilitySensor onChange={onVisibilityChange}>
                <Progress
                  skillName={singleSkillPercentage.name}
                  done={singleSkillPercentage.done}
                  isVisible={isVisible}
                />
              </VisibilitySensor>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
