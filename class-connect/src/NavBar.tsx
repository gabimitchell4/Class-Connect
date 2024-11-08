// src/components/NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/survey">Survey</Link></li>
        <li><Link to="/activity">Activity</Link></li>
        <li><Link to="/filter">Filter</Link></li>
        <li><Link to="/event">Event</Link></li>
        <li><Link to="/social">Social</Link></li>
        <li><Link to="/upcoming-events">Upcoming Events</Link></li>
        <li><Link to="/rewards">Rewards</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
