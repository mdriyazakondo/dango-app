import React from "react";
import { FaCocktail } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#78c2ad]">
      <div className="flex  items-center justify-between mx-4 md:mx-40 py-4">
        <Link to="/">
          <h2 className="text-2xl flex items-center gap-1 font-bold text-white">
            <FaCocktail /> Dringo
          </h2>
        </Link>
        <ul className="flex items-center gap-8">
          <Link to="/">
            <li className="text-white text-xl font-semibold">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-white text-xl font-semibold">About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
