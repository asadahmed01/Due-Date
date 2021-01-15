import React from "react";
import { FaBars, FaCalendar } from "react-icons/fa";

function NavBar({ showMenu, status }) {
  return (
    <header className="bg-gray-900 ">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-xl text-gray-400 hover:text-white">
          <FaCalendar />
        </div>

        <div>
          <butt
            type="button"
            className="text-gray-400 hover:text-white"
            onClick={showMenu}
          >
            <FaBars />
          </butt>
        </div>
      </div>

      <div className={status ? "block px-4 pb-3" : "hidden"}>
        <a
          href="#"
          className="block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md"
        >
          Login
        </a>
        <a
          href="#"
          className="block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md"
        >
          Register
        </a>
      </div>
    </header>
  );
}

export default NavBar;
