import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" flex justify-between py-4 px-20">
      <Link to="/">
        <h1 className="font-carla text-xl text-black py-1 font-bold tracking-widest uppercase">
          BulBul <span className="ml-2">Ahmed</span>
        </h1>
      </Link>
      <button>
        <LiaBarsSolid className="text-3xl" />
      </button>
    </header>
  );
};

export default Header;
