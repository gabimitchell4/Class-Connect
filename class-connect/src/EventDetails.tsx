import React, { useState } from "react";
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
  const { title, image } = location.state;

  const [showModal, setShowModal] = useState<boolean>(false); // Manage modal visibility
  const [modalStep, setModalStep] = useState<number>(0); // Track modal steps for popup flow

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
    <h2>Interested In Pairing Up?</h2>
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
    <h2>Tool Tip</h2>
    <p>
      Our pairing system will pair you up with someone who is also attending
      the class and matches the preferences indicated on your survey.
    </p>
    <button className="popup-button" onClick={nextModalStep}>
      Continue
    </button>
  </>
)}
{modalStep === 3 && (
  <>
    <h2>You’re All Set!</h2>
    <p>You can view event details in your “My Calendar” tab.</p>
    <button className="popup-button" onClick={nextModalStep}>
      View Countdown
    </button>
  </>
)}
{modalStep === 4 && (
  <>
    <h2>You’re All Set!</h2>
    <div className="countdown">
      <p>Days : Hours : Minutes</p>
      <p>01 : 03 : 15</p>
    </div>
    <p>
      Pairings will drop @ 7:00 AM on {event.date} and can be viewed in the
      “My Calendar” tab.
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
