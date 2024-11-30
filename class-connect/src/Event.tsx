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
import { FaUser } from "react-icons/fa";

// Updated events array with numeric distance
const events = [
  {
    id: 1,
    title: "Yoga",
    image: yogaImage,
    distance: 1.2, // Numeric distance in miles
    tags: ["Fitness", "Beginner"],
  },
  {
    id: 2,
    title: "HIIT Workout",
    image: hiitImage,
    distance: 2.0,
    tags: ["Fitness", "Advanced"],
  },
  {
    id: 3,
    title: "Pilates",
    image: pilatesImage,
    distance: 1.5,
    tags: ["Fitness", "Interm"],
  },
  {
    id: 4,
    title: "Cooking Class",
    image: cookingImage,
    distance: 0.5,
    tags: ["Creative", "Beginner", "Food"], // Added "Food" tag
  },
  {
    id: 5,
    title: "Zumba",
    image: zumbaImage,
    distance: 3.0,
    tags: ["Fun", "Fitness"],
  },
  {
    id: 6,
    title: "Meditation",
    image: meditationImage,
    distance: 1.0,
    tags: ["Relaxation", "Beginner"],
  },
  {
    id: 7,
    title: "Strength Training",
    image: strengthImage,
    distance: 1.8,
    tags: ["Fitness", "Advanced"],
  },
  {
    id: 8,
    title: "Cycling",
    image: cyclingImage,
    distance: 2.2,
    tags: ["Fitness", "Interm"],
  },
];

const Event: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events); // Initialize with all events

  const handleApplyFilters = (filters: {
    startTime: number;
    location: string;
    rewardPoints: number;
    priceRange: number;
    difficulty: string[];
    activityType: string[];
  }) => {
    console.log("Applied Filters:", filters);

    const filtered = events.filter((event) => {
      // Check difficulty match
      const matchesDifficulty =
        filters.difficulty.length === 0 ||
        filters.difficulty.some((d) => event.tags.includes(d));

      // Check activity type match
      const matchesActivityType =
        filters.activityType.length === 0 ||
        filters.activityType.some((type) => event.tags.includes(type));

      // Check distance range (priceRange is used as max distance in miles)
      const matchesDistance = event.distance <= filters.priceRange;

      return matchesDifficulty && matchesActivityType && matchesDistance;
    });

    setFilteredEvents(filtered);
  };

  return (
    <div className="event-container">
      <Filter onSave={handleApplyFilters} />

      <div className="header">
        <h1>Events</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="profile-icon">
            <Link to="/profile">
              <FaUser />
            </Link>
          </div>
        </div>
      </div>

      <h2>For You</h2>
      <div className="event-row">
        {filteredEvents
          .filter((event) =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .slice(0, 4)
          .map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="event-card-2"
              state={{ title: event.title, image: event.image }}
            >
              <div className="event-image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
                <span className="event-distance">{event.distance} miles away</span>
              </div>
              <div className="event-details">
                <p className="event-title">{event.title}</p>
                <div className="event-tags">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
      </div>

      <h2>Most Popular</h2>
      <div className="event-row">
        {filteredEvents
          .filter((event) =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .slice(4, 8)
          .map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="event-card-2"
              state={{ title: event.title, image: event.image }}
            >
              <div className="event-image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
                <span className="event-distance">{event.distance} miles away</span>
              </div>
              <div className="event-details">
                <p className="event-title">{event.title}</p>
                <div className="event-tags">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Event;
