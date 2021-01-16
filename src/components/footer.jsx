import React from "react";

function Footer() {
  return (
    <div className="mt-20">
      <footer className="footer bg-gray-800 py-2 text-center text-gray-200 bottom-0 w-full fixed">
        <span>&copy; {new Date().getFullYear()} Asad Ahmed</span>
      </footer>
    </div>
  );
}

export default Footer;
