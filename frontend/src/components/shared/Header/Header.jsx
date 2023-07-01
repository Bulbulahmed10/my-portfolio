import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="relative flex justify-between py-4 px-4 md:px-10 lg:px-20 z-50">
      <Link to="/">
        <h1 className="font-carla md:text-xl text-black py-1 font-bold tracking-widest uppercase">
          BulBul <span className="md:ml-2">Ahmed</span>
        </h1>
      </Link>
      <div>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "font-carla font-bold tracking-wide md:text-lg text-yellow-700"
              : "font-carla font-bold tracking-wide md:text-lg hover:text-yellow-700"
          }>
          Projects
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
