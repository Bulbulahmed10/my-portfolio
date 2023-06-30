import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="relative flex justify-between py-4 px-20 z-50">
      <Link to="/">
        <h1 className="font-carla text-xl text-black py-1 font-bold tracking-widest uppercase">
          BulBul <span className="ml-2">Ahmed</span>
        </h1>
      </Link>
      <div>
        <Link
          to="/projects"
          className="font-carla font-bold tracking-wide text-lg hover:text-yellow-700 ">
          Projects
        </Link>
      </div>
    </header>
  );
};

export default Header;
