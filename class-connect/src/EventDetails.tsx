import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaDollarSign, FaChartBar, FaInfoCircle } from "react-icons/fa";
import "./EventDetails.css";

const EventDetails: React.FC = () => {
  const location = useLocation();
  const { title, image } = location.state;

  // Event details mapping
  const eventsDetails = {
    Yoga: {
      rewardPoints: 100,
      location: "1408 Beacon St, Brookline, MA",
      date: "November 15, 2024",
      time: "7:00–9:00 PM",
      price: "$30.00",
      difficulty: "Beginner",
      description:
        "Join our Yoga class to improve flexibility and reduce stress. Perfect for beginners looking to unwind and connect with their inner peace.",
      distance: "1.2 miles away",
      attendees: "20+ Going",
      pairingNote: "Window to pair up closes 08/15/2024 @ 7:00 AM",
      organizer: {
        name: "The Zen Studio",
        logo: "https://via.placeholder.com/50",
      },
    },
    "Cooking Class": {
      rewardPoints: 150,
      location: "24 Lawn Ave, Boston, MA",
      date: "November 20, 2024",
      time: "6:00–7:00 PM",
      price: "$25.00",
      difficulty: "Advanced",
      description:
        "Come cook a new, delicious meal with people surrounded by community.",
      distance: "2.0 miles away",
      attendees: "15+ Going",
      pairingNote: "Window to pair up closes 08/18/2024 @ 7:00 AM",
      organizer: {
        name: "Chef's Corner",
        logo: "https://via.placeholder.com/50",
      },
    },
  };

  const event = eventsDetails[title] || {
    rewardPoints: 0,
    location: "Location not available",
    date: "Date not available",
    time: "Time not available",
    price: "Free",
    difficulty: "All levels",
    description: "No description available for this event.",
    distance: "Unknown distance",
    attendees: "Unknown attendance",
    pairingNote: "No pairing information available",
    organizer: {
      name: "Unknown",
      logo: "https://via.placeholder.com/50",
    },
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalStep, setModalStep] = useState<number>(0);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleInterestedClick = () => {
    setShowModal(true);
    setModalStep(1);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalStep(0);
  };

  const nextModalStep = () => {
    setModalStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="event-page">
      {/* Header Section */}
      <div className="header">
        <h1 className="event-title">{title}</h1>
        <div className="reward-points">{event.rewardPoints} Reward Points</div>
      </div>

      {/* Content Section */}
      <div className="content">
        {/* Left Section */}
        <div className="left-section">
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
          <p className="pairing-note">
            <strong>NOTE:</strong> {event.pairingNote}
          </p>
        </div>

        {/* Right Section */}
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

          <button className="interested-button" onClick={handleInterestedClick}>
            I'm Interested
          </button>

          <div className="organizer">
            <img
              src={event.organizer.logo}
              alt={event.organizer.name}
              className="organizer-logo"
            />
            <div className="organizer-details">
              <span>{event.organizer.name}</span>
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {modalStep === 1 && (
              <>
              <div className = "pairing-header">
                <h2>Interested In Pairing Up?</h2>
                <div
                  className="tooltip-wrapper"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <FaInfoCircle className="info-icon" />
                  {showTooltip && (
                    <div className="tooltip">
                      Click to express your interest in this event and explore
                      pairing options!
                    </div>
                  )}
                  </div>
                </div>
                <p>Would you like to pair up with another attendee?</p>
                <button className="popup-button" onClick={nextModalStep}>
                  Yes
                </button>
                <button className="popup-button" onClick={nextModalStep}>
                  No
                </button>
              </>
            )}
            {modalStep === 2 && (
              <>
                <h2>You’re All Set!</h2>
                <p>You can view event details in your “My Calendar” tab.</p>
                <button className="popup-button" onClick={nextModalStep}>
                  View Countdown
                </button>
              </>
            )}
            {modalStep === 3 && (
              <>
                <h2>You’re All Set!</h2>
                <div className="countdown">
                  <p>Days : Hours : Minutes</p>
                  <p>01 : 03 : 15</p>
                </div>
                <p>
                  Pairings will drop @ 7:00 AM on {event.date} and can be viewed
                  in the “My Calendar” tab.
                </p>
              </>
            )}
            <button className="close-modal" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
