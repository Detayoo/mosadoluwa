import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../../public/logo.png";
import hamburgerIcon from "../../../public/hamburgerIcon.png"; // Ensure you have the correct path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#151414] sticky top-0 right-0 z-[999999999]">
      <nav className="navbar layout__container py-[30px]">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>

        {/* Menu */}
        <div className="">
          <div className={`menu ${isOpen ? "open" : ""}`}>
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="menu-item dropdown block sm:hidden">
                <span>About</span>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/bio" onClick={closeMenu}>
                      Bio
                    </Link>
                  </li>
                  <li>
                    <Link to="/career" onClick={closeMenu}>
                      Career
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item hidden sm:block">
                <Link to="/career" onClick={closeMenu}>
                  Career
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/media" onClick={closeMenu}>
                  Media
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Send a Mail Button */}
        <button className="desktopMenuBtn">
          <a href="mailto:someone@example.com">Send a Mail</a>
        </button>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <img src={hamburgerIcon} alt="menu" className="hamburger-icon" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
