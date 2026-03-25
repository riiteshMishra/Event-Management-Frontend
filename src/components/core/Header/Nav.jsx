import React from "react";
import { navlinks } from "../../../data/navbar";
import { NavLink } from "react-router-dom";
import ThemeChanger from "../../common/ThemeChanger";

const Nav = () => {
  return (
    <div className="items-center gap-x-10 hidden sm:flex">
      <ThemeChanger />

      {navlinks.map((link) => (
        <NavLink
          to={link.path}
          key={link.name}
          className={({ isActive }) =>
            `block font-semibold transition ${
              isActive
                ? "text-[#f00] font-bold"
                : "text-black dark:text-light"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;