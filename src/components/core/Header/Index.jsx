import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import ThemeChanger from "../../common/ThemeChanger";
import Hamburger from "../../common/Hamburger";

const Header = () => {
  return (
    <div className=" dark:bg-dark bg-light z-999 relative">
      <div className="flex items-center justify-between container py-4">
        
        <div className="flex items-center gap-x-4">
          <Link className=" dark:text-light text-dark font-bold" to={"/"}>
            Logo
          </Link>
          <div className=" inline-block sm:hidden">
            <ThemeChanger />
          </div>
        </div>

        {/* navbaar */}
        <Nav />

        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
