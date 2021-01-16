import React from "react";
import { FaBars, FaCalendar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to="/login"
          className="block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md"
        >
          Register
        </NavLink>
      </div>
    </header>
  );
}

export default NavBar;
