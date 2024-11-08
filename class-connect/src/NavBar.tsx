// src/components/NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaGift, FaClipboardList } from "react-icons/fa";
import './NavBar.css'; // Import the CSS file

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/event">
            <FaCalendarAlt className="icon" />
            Events
          </Link>
        </li>
        <li>
          <Link to="/rewards">
            <FaGift className="icon" />
            Rewards
          </Link>
        </li>
        <li>
          <Link to="/upcoming-events">
            <FaClipboardList className="icon" />
            Upcoming Events
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
