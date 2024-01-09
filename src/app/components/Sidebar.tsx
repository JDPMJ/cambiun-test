"use client";

import { useState } from "react";
import Link from "next/link";
import { RiBarChart2Line, RiLogoutCircleRLine, RiArrowRightSLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

import NavLinks from "./NavLinks";

//import "bootstrap/dist/js/bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={`xl:h-[100vh] fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col z-50 ${showMenu ? "left-0" : "-left-full"} transition-all`}>
        <h1 className="text-center text-2xl font-bold text-white mb-10">
          Cambiun<span className="text-orange-700 text-4xl">.</span>
        </h1>
        <div className="overflow-y-scroll">
          <NavLinks />
        </div>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden  fixed bottom-4 right-4 bg-orange-700 text-black p-3 rounded-full z-50">
        { showMenu ? <RiCloseLine /> : <RiMenu3Line /> }
      </button>
    </>
  );
};

export default Sidebar;