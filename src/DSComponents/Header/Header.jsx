import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ logoLink, logo, userNav, appNav }) => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header__logo">
          <Link to={logoLink}>{logo}</Link>
        </div>
        <div className="header__user-nav">{userNav}</div>
      </div>
      <div className="header__app-nav">{appNav}</div>
    </div>
  );
};

Header.propTypes = {
  logo: PropTypes.node,
  logoLink: PropTypes.string,
  userNav: PropTypes.node,
  appNav: PropTypes.node,
};

export default Header;
