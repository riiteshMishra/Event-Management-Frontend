import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Navlinks from "../core/Header/Sidebar/Navlinks";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="sm:hidden block relative">
      
      {/* Button */}
      <div onClick={() => setActive((prev) => !prev)} 
        className="dark:text-light text-dark"
        >
        {active ? <HiX size={24} /> : <HiMenu size={24} />}
      </div>

      {/* Navlinks always mounted */}
      <Navlinks active={active}  setActive={setActive}/>
    </div>
  );
};

export default Hamburger;