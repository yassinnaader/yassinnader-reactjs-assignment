import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <NavLink
            to="/"
            className="navbar-brand"
          >
            LearnHub
          </NavLink>

          <div className="navbar-nav ms-auto">

            <NavLink
              to="/"
              className="nav-link"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="nav-link"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link"
            >
              Contact
            </NavLink>

          </div>

        </div>
      </nav>

    </header>
  );
}

export default Header;