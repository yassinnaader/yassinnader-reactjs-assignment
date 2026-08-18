import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg ${
          theme === "dark"
            ? "navbar-dark bg-dark"
            : "navbar-light bg-light"
        }`}
      >
        <div className="container">

          {/* Website Logo / Name */}
          <NavLink to="/" className="navbar-brand">
            LearnHub
          </NavLink>

          {/* Navigation Links */}
          <div className="navbar-nav ms-auto">

            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/about" className="nav-link">
              About
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>

            {/* Theme Button */}
            <button
              onClick={toggleTheme}
              className={`btn ms-3 ${
                theme === "dark"
                  ? "btn-outline-light"
                  : "btn-outline-dark"
              }`}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;