import { GrMapLocation } from "react-icons/gr";
import { LuSmartphone } from "react-icons/lu";
import { FiMail, FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="relative pl-16 mt-52">
      <div className="absolute left-2">
        <p className="font-carla uppercase tracking-[16px] text-sm rotate-90 relative origin-top-left">
          contact
        </p>
        <p className="absolute rotate-90 mt-[190px] -ml-[43px] bg-black w-16 h-[1px] "></p>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex font-carla items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <GrMapLocation className="text-lg" />
            </div>
            <p className="text-[#808080] tracking-wider">
              Gopalganj,Dhaka,Bangladesh
            </p>
          </div>
          <div className="flex font-carla items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <LuSmartphone className="text-lg " />
            </div>
            <p className="text-[#808080] tracking-wider">
              +8801789499829, +8801979499829
            </p>
          </div>
          <div className="flex font-carla items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <FiMail className="text-lg " />
            </div>
            <p className="text-[#808080] tracking-wider">
              mdbulbulmolla1222@gmail.com
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              to="https://www.linkedin.com/in/bulbul-ahmed10/"
              target="_blank"
              className="bg-yellow-400 p-2 rounded-full">
              <RiLinkedinLine className="text-lg " />
            </Link>
            <Link
              to="https://github.com/BulbulAhmed10"
              target="_blank"
              className="bg-yellow-400 p-2 rounded-full">
              <FiGithub className="text-lg " />
            </Link>
          </div>
        </div>

        <form className="grow flex flex-col gap-4">
          <div className="flex w-full gap-4 ">
            <input
              className="bg-yellow-100 w-[50%] text-black px-2 py-2 outline-none rounded-md font-carla text-lg font-semibold"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
             <input
              className="bg-yellow-100 w-[50%] text-black px-2 py-2 outline-none rounded-md font-carla text-lg font-semibold"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea
             className="bg-yellow-100 w-full resize-none text-black px-2 py-2 outline-none rounded-md font-carla text-lg font-semibold"
              name="textarea"
              cols="30"
              rows="8"
              placeholder="Message" required></textarea>
            <button className="bg-yellow-400 mt-2 font-carla text-lg px-4 py-2 rounded-md hover:bg-yellow-300 font-semibold" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
