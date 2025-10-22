import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";

function Nav({ input, value }) {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="navigation-container">
      <nav>
        <div className="nav-left">
          <div className="nav-container">
            <input
              className="search-input"
              type="text"
              placeholder="Enter your product"
              value={value}
              onChange={input}
            />
          </div>
        </div>

        <div className="profile-container">
          {/* Theme toggle */}
          <button
            className="theme-toggle btns"
            onClick={() => setDarkMode((p) => !p)}
            aria-label="Toggle theme"
            aria-pressed={darkMode}
            type="button"
          >
            {darkMode ? <BsSun className="nav-icons" /> : <BsMoon className="nav-icons" />}
          </button>

          <a href="#"><FiHeart className="nav-icons" /></a>
          <a href="#"><AiOutlineShoppingCart className="nav-icons" /></a>
          <a href="#"><AiOutlineUserAdd className="nav-icons" /></a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
