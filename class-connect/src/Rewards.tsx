import React, { useState } from "react";
import { FaAward, FaUser } from "react-icons/fa";
import "./Rewards.css";
import target from "./assets/target.png";
import amazon from "./assets/amazon.png";
import painting from "./assets/painting.png";
import yoga from "./assets/yoga.png";
import { Link } from "react-router-dom";

const Rewards = () => {
  const [showPopup, setShowPopup] = useState(false); // First popup
  const [showRedeemPopup, setShowRedeemPopup] = useState(false); // Second popup
  const [points, setPoints] = useState(100); // Points state
  const [rewardCode, setRewardCode] = useState(""); // Reward code state

  const handleLearnMore = () => {
    setShowPopup(true); // Show first popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the first popup
  };

  const handleRedeem = () => {
    if (points >= 100) {
      setPoints(points - 100); // Deduct points
      setRewardCode("mih6otKx"); // Set the reward code
      setShowPopup(false); // Close the first popup
      setShowRedeemPopup(true); // Open the second popup
    } else {
      alert("Not enough points to redeem!");
    }
  };

  const handleCloseRedeemPopup = () => {
    setShowRedeemPopup(false); // Close the second popup
  };

  return (
    <div className="rewards-container">
      {/* Header */}
      <div className="header">
        <h1>Rewards</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="profile-icon">
            <Link to="/profile">
              <FaUser />
            </Link>
          </div>
        </div>
      </div>

      {/* My Points and Past Events */}
      <div className="points-events-container">
        {/* My Points */}
        <div className="points-card">
          <FaAward className="rewards-icon" />
          <h2>{points} POINTS</h2>
          <div className="progress-container">
            <div className="progress-bar-dots">
              <div
                className="progress-filled"
                style={{ width: `${(points / 1000) * 100}%` }}
              ></div>
              <div className="dots">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="dot"></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div className="events-card">
          <h2>Past Events</h2>
          <div className="event-item">
            <div className="event-date">
              <p>NOV</p>
              <p>18</p>
            </div>
            <div className="event-details">
              <h3>Paint & Sip</h3>
              <p>7:00–9:00 PM</p>
              <p>1448 Beacon St, Brookline, MA</p>
            </div>
            <div className="event-points">+100 POINTS</div>
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="rewards-section">
        <div className="reward-card unlocked">
          <img src={target} alt="Target" />
          <h3>$5 Target Gift Card</h3>
          <p>100 POINTS</p>
          <div className="progress-bar">
            <div className="progress-filled-2" style={{ width: "100%" }}></div>
          </div>
          <button
            className={`learn-more-button ${points < 100 ? "disabled" : ""}`}
            onClick={handleLearnMore}
            disabled={points < 100}
          >
            Learn More
          </button>
        </div>

        <div className="reward-card locked">
          <img src={amazon} alt="Amazon" />
          <h3>$15 Amazon Gift Card</h3>
          <p>500 POINTS</p>
          <div className="progress-bar">
            <div className="progress-filled-2" style={{ width: "20%" }}></div>
          </div>
          <button className="learn-more-button disabled">Learn More</button>
        </div>

        <div className="reward-card locked">
          <img src={painting} alt="Painting Class" />
          <h3>$10 OFF Painting Class</h3>
          <p>500 POINTS</p>
          <div className="progress-bar">
            <div className="progress-filled-2" style={{ width: "10%" }}></div>
          </div>
          <button className="learn-more-button disabled">Learn More</button>
        </div>

        <div className="reward-card locked">
          <img src={yoga} alt="Yoga Class" />
          <h3>Free Yoga Class</h3>
          <p>1000 POINTS</p>
          <div className="progress-bar">
            <div className="progress-filled-2" style={{ width: "2%" }}></div>
          </div>
          <button className="learn-more-button disabled">Learn More</button>
        </div>
      </div>

      {/* First Popup */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <button className="close-popup" onClick={handleClosePopup}>
              ✕
            </button>
            <img src={target} alt="Target Gift Card" className="popup-image" />
            <h3>$5 Target Gift Card</h3>
            <p>
              Hit “Redeem” to confirm your reward. Once confirmed, you'll
              receive your unique reward code.
            </p>
            <button className="redeem-button" onClick={handleRedeem}>
              Redeem
            </button>
          </div>
        </div>
      )}

      {/* Second Popup */}
      {showRedeemPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <button className="close-popup" onClick={handleCloseRedeemPopup}>
              ✕
            </button>
            <img src={target} alt="Target Gift Card" className="popup-image" />
            <h3>Congratulations!</h3>
            <p>
              Use the code below to access the reward. This can be used for
              in-store or online purchases.
            </p>
            <div className="reward-code">{rewardCode}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rewards;
