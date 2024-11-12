import React, { useState } from "react";
import { FaSpa, FaDumbbell, FaPizzaSlice, FaRunning } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import Filter from "./Filter.tsx"; // Import Filter here
import "./Event.css";

const events = [
  { id: 1, title: "Yoga", icon: <FaSpa /> },
  { id: 2, title: "HIIT Workout", icon: <FaDumbbell /> },
  { id: 3, title: "Pilates", icon: <FaRunning /> },
  { id: 4, title: "Cooking Class", icon: <FaPizzaSlice /> },
  { id: 5, title: "Zumba", icon: <FaDumbbell /> },
  { id: 6, title: "Meditation", icon: <FaSpa /> },
  { id: 7, title: "Strength Training", icon: <FaDumbbell /> },
  { id: 8, title: "Cycling", icon: <FaRunning /> },
];

const Event: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter events based on the search term
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="event-container">
      {/* Filter Component will be displayed in the Event component */}
      <Filter />

      <div className="header">
        <h1>Events</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <h2>For You</h2>
      <div className="event-row">
        {filteredEvents.slice(0, 4).map((event) => (
          <Link key={event.id} to={`/events/${event.id}`} className="event-card">
            <div className="event-icon">{event.icon}</div>
            <p className="event-title">{event.title}</p>
          </Link>
        ))}
      </div>

      <h2>Most Popular</h2>
      <div className="event-row">
        {filteredEvents.slice(4, 8).map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-icon">{event.icon}</div>
            <p className="event-title">{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
