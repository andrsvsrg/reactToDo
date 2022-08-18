import "./header.css";

import React from "react";
import ReactTooltip from "react-tooltip";

import MyButton from "../UI/button/MyButton";
import deleteDayTasksSVG from "../../icon/deleteDayTasks.svg";
import deleteAllTasksSVG from "../../icon/deleteAllTasks.svg";

const Header = React.memo(function Header({
  deleteSelectedDayAllTasks,
  deleteAllTasks,
}) {
  return (
    <div className="header">
      <div className="header-container">
        <MyButton
          data-tip
          data-for="deleteThisDay"
          onClick={deleteSelectedDayAllTasks}
          className="header-buttons"
        >
          <img
            src={deleteDayTasksSVG}
            alt="delete day tasks"
            width="25px"
            height="25px"
          />
        </MyButton>
        <ReactTooltip id="deleteThisDay" type="error" effect="solid">
          <span>Delete tasks from this day</span>
        </ReactTooltip>
        <h1 className="header-title">To Do List</h1>
        <MyButton
          data-tip
          data-for="deleteAll"
          onClick={deleteAllTasks}
          className="header-buttons"
        >
          <img
            src={deleteAllTasksSVG}
            alt="delete all tasks"
            width="25px"
            height="25px"
          />
        </MyButton>
        <ReactTooltip id="deleteAll" type="error" effect="solid">
          <span>Delete ALL tasks</span>
        </ReactTooltip>
      </div>
    </div>
  );
});

export default Header;
