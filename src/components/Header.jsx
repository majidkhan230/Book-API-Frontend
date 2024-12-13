import React from "react";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className=" sticky top-0 bg-[#F5F7FA] md:p-6  md:px-20">
      <div className="container flex justify-between items-center ">
        <div className="logo font-bold text-5xl ">BOOKAPI</div>
        <ul className="flex list-none space-x-4 font-semibold">
          <li className="rounded-full  text-slate-600 p-2 hover:bg-[#432BC8] hover:text-white hover:drop-shadow-lg uppercase">
            Home
          </li>
          <li className="rounded-full text-slate-600 p-2 hover:bg-[#432BC8] hover:text-white hover:drop-shadow-lg uppercase">
            DOCS
          </li>
        </ul>
        <div className="cont">
          <FaGithub size={32} />
        </div>
      </div>
    </div>
  );
}

export default Header;
