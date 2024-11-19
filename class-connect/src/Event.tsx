import React, { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter.tsx";
import "./Event.css";

import yogaImage from "./assets/yoga.jpeg";
import hiitImage from "./assets/hiit.jpeg";
import pilatesImage from "./assets/pilates.webp";
import cookingImage from "./assets/cooking.jpeg";
import zumbaImage from "./assets/zumba.jpeg";
import meditationImage from "./assets/meditation.jpeg";
import strengthImage from "./assets/strength.jpeg";
import cyclingImage from "./assets/spin.jpeg";

const events = [
  { id: 1, title: "Yoga", image: yogaImage },
  { id: 2, title: "HIIT Workout", image: hiitImage },
  { id: 3, title: "Pilates", image: pilatesImage },
  { id: 4, title: "Cooking Class", image: cookingImage },
  { id: 5, title: "Zumba", image: zumbaImage },
  { id: 6, title: "Meditation", image: meditationImage },
  { id: 7, title: "Strength Training", image: strengthImage },
  { id: 8, title: "Cycling", image: cyclingImage },
];


const Event: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="event-container">
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
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="event-card"
            state={{ title: event.title, image: event.image }}
          >
            <div className="event-image-container">
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
            </div>
            <p className="event-title">{event.title}</p>
          </Link>
        ))}
      </div>

      <h2>Most Popular</h2>
      <div className="event-row">
        {filteredEvents.slice(4, 8).map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="event-card"
            state={{ title: event.title, image: event.image }}
          >
            <div className="event-image-container">
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
            </div>
            <p className="event-title">{event.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Event;
