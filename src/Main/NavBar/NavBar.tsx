import React from "react";
import "../NavBar/Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul className="nav-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">ChallengeTrends</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
