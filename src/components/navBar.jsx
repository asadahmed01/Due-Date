import React from "react";
import { FaBars, FaCalendar, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavBar({ showMenu, status, user }) {
  return (
    <header className="bg-blue-600 py-2 md:flex md:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-4xl text-gray-100 hover:text-white">
          <FaCalendar />
        </div>

        <div className="md:hidden">
          <butt
            type="button"
            className="text-gray-100 hover:text-white text-4xl cursor-pointer"
            onClick={showMenu}
          >
            {status ? <FaTimes /> : <FaBars />}
          </butt>
        </div>
      </div>

      <div className={status ? "block px-4 pb-3 " : "hidden md:flex"}>
        {!user && (
          <React.Fragment>
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
          </React.Fragment>
        )}

        {user && (
          <React.Fragment>
            <NavLink
              to="/tasks"
              className="block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md"
            >
              {<span className="text-gray-200">{user.email}</span>}
            </NavLink>
            <NavLink
              to="/logout"
              className="block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md"
            >
              Logout
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </header>
  );
}

export default NavBar;
