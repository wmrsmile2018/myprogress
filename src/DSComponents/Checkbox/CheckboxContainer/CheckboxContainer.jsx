import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./CheckboxContainer.scss";

export const CheckboxContainer = ({
  children,
  className,
  organization,
  registration,
  modificators,
}) => {
  const classes = classNames(
    "checkbox-container",
    { [`checkbox-container-${className}`]: className },
    modificators,
  );
  return (
    <div className={classes}>
      <div className="checkbox-container-wrapper">{children}</div>
      <div className="checkbox-container__description">
        <p className="checkbox-container__organiztion">{organization}</p>
        <p className="checkbox-container__registration">{registration}</p>
      </div>
    </div>
  );
};

CheckboxContainer.propTypes = {
  children: PropTypes.node.isRequired,
  organization: PropTypes.string.isRequired,
  registration: PropTypes.string.isRequired,
  className: PropTypes.string,
  modificators: PropTypes.string,
};

CheckboxContainer.defaultProps = {
  className: "",
  modificators: "",
};
