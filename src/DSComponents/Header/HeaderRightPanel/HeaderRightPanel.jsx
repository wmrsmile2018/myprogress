import React from "react";
import PropTypes from "prop-types";
import sprite from "../../../images/sprite.svg";
import "./HeaderRightPanel.scss";

const RightPanel = ({
  userName,
  userCaption,
  notifyCount,
  exitApplication,
  onNotificationsClickHandler,
}) => {
  return (
    <div className="right-panel">
      <div className="right-panel__notify-post">
        <div className="right-panel__notifications" onClick={onNotificationsClickHandler}>
          <svg width="21" height="25">
            <use href={`${sprite}#bell-icon`} />
          </svg>
          {notifyCount !== 0 && (
            <div className="right-panel__notifications-count">{notifyCount}</div>
          )}
        </div>
        <svg className="right-panel__post-icon" width="30" height="22">
          <use href={`${sprite}#letter-icon`} />
        </svg>
      </div>
      <div className="right-panel__user-info-container">
        <svg className="right-panel__avatar-icon" width="30" height="30">
          <use href={`${sprite}#avatar-icon`} />
        </svg>
        <div className="right-panel__user-info">
          <p className="right-panel__user-name">{userName}</p>
          <p className="right-panel__user-organization">{userCaption}</p>
        </div>
      </div>
      <div className="right-panel__exit" onClick={exitApplication}>
        <svg width="22" height="28">
          <use href={`${sprite}#exit-icon`} />
        </svg>
        <p>Выйти</p>
      </div>
    </div>
  );
};

RightPanel.propTypes = {
  notifyCount: PropTypes.number,
  userName: PropTypes.string,
  userCaption: PropTypes.string,
  organization: PropTypes.object,
  exitApplication: PropTypes.func,
  onNotificationsClickHandler: PropTypes.func,
};

export default RightPanel;
