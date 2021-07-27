import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = ({ options }) => {
  return (
    <div className="nav">
      <ul className="nav__list">
        {options.links.map((link, i) => (
          <li className="nav__list-item" key={`nav-item-${i}`}>
            <NavLink
              to={link.to}
              className="nav__list-item-link"
              activeClassName="nav__list-item-link--active"
              exact={false}
              isActive={link.isActive ? link.isActive : (match) => !!match}
            >
              <svg width={link.width} height={link.height}>
                <use href={link.iconHref} />
              </svg>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  options: PropTypes.shape({
    links: PropTypes.arrayOf(
      PropTypes.shape({
        to: PropTypes.string,
        iconHref: PropTypes.string,
        text: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
      }),
    ),
  }),
};

export default Navigation;
