import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple px1">
        <a href="/" className="brand-logo">
          some text
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">list</NavLink>
          </li>
          <li>
            <NavLink to="/about">about us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
