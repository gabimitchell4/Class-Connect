import React from "react";
import { useLocation } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaChartBar,
} from "react-icons/fa";
import "./EventDetails.css";

const EventDetails: React.FC = () => {
  const location = useLocation();
  const { title, image } = location.state; // Access title and image from state

  const event = {
    rewardPoints: 100,
    location: "1408 Beacon St, Brookline, MA",
    date: "November 15, 2024",
    time: "7:00–9:00 PM",
    price: "$30.00",
    difficulty: "Beginner",
    description:
      "Come paint some pottery with your friends and relax. Enjoy a complimentary glass of champagne on the house! Pieces can be picked up a week after your visit.",
    distance: "1.2 miles away",
    attendees: "20+ Going",
    pairingNote: "Window to pair up closes 08/15/2024 @ 7:00 AM",
    organizer: {
      name: "The Clayroom",
      logo: "https://via.placeholder.com/50", // Placeholder logo
    },
  };

  return (
    <div className="event-details">
      <div className="header">
        <h1>{title}</h1>
        <div className="reward-points">{event.rewardPoints} Reward Points</div>
      </div>

      <div className="main-content">
        <div className="left-section">
          {/* Display the image from the state */}
          <div className="event-image-container">
            <img src={image} alt={title} className="event-image" />
          </div>
          <span className="distance">{event.distance}</span>
          <div className="attendees">
            <div className="attendee-placeholder">A</div>
            <div className="attendee-placeholder">B</div>
            <div className="attendee-placeholder">C</div>
            <span>{event.attendees}</span>
          </div>
          <p className="pairing-note">{event.pairingNote}</p>
        </div>

        <div className="right-section">
          <div className="event-info">
            <p>
              <FaMapMarkerAlt /> <strong>Location:</strong> {event.location}
            </p>
            <p>
              <FaCalendarAlt /> <strong>Date:</strong> {event.date}
            </p>
            <p>
              <FaClock /> <strong>Time:</strong> {event.time}
            </p>
            <p>
              <FaDollarSign /> <strong>Price:</strong> {event.price}
            </p>
            <p>
              <FaChartBar /> <strong>Difficulty:</strong> {event.difficulty}
            </p>
          </div>

          <div className="description">
            <strong>Description:</strong>
            <p>{event.description}</p>
          </div>

          <button className="interested-button">I'm Interested</button>

          <div className="organizer">
            <img
              src={event.organizer.logo}
              alt={event.organizer.name}
              className="organizer-logo"
            />
            <span>{event.organizer.name}</span>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>

        <div className="related-activities">
          <h2>Related Activities</h2>
          <div className="activity-cards">
            <div className="card">
              <span>Activity 1</span>
              <span>0.5 miles away</span>
            </div>
            <div className="card">
              <span>Activity 2</span>
              <span>1 mile away</span>
            </div>
            <div className="card">
              <span>Activity 3</span>
              <span>1.2 miles away</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
