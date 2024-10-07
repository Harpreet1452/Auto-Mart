import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./SideBar.css";

const SideBar: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div id="wrapper" className={isToggled ? "toggled" : ""}>
      {/* Sidebar */}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#">Header</a>
          </li>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
          <li>
            <a href="#">Link 5</a>
          </li>
          <li>
            <a href="#">Link 6</a>
          </li>
          <li>
            <a href="#">Link 7</a>
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <div className="toggle-button">
        <IconButton
          color="primary"
          className="toggle-icon"
          onClick={handleToggle}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SideBar;
