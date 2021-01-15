import React from "react";

function Footer() {
  return (
    <footer class="footer bg-gray-800 py-2 border-b-2 border-blue-700 mt-10 text-center text-gray-200">
      <span>&copy; {new Date().getFullYear()} Asad Ahmed</span>
    </footer>
  );
}

export default Footer;
