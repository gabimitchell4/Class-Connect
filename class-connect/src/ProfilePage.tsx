import React, { useState } from "react";
import { FaUser, FaInfoCircle } from "react-icons/fa";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Left profile section */}
        <div className="profile-header">
          <div className="profile-icon">
            <FaUser />
          </div>
          <h1>Profile</h1>
          <h2>Test User</h2>
          <button className="edit-photo-button">Edit Photo</button>
        </div>

        {/* Right details section */}
        <div className="profile-details">
          {/* User details */}
          <div className="field">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" value="Test User" readOnly />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                value="jellybeans123"
                readOnly
              />
              <button
                className="show-button"
                onClick={togglePasswordVisibility}
              >
                {passwordShown ? "Hide" : "Show"}
              </button>{" "}
            </div>
          </div>

          {/* Survey results */}
          <div className="survey-results">
            <div className="survey-header">
              <h3>Survey Results</h3>
              <FaInfoCircle className="info-icon" />
            </div>
            <div className="survey-content">
              <p>
                <strong>Age:</strong> 21
              </p>
              <p>
                <strong>Gender:</strong>{" "}
                <span style={{ color: "#6b238e", fontWeight: "bold" }}>
                  Female
                </span>
              </p>
              <p>
                <strong>Hobbies:</strong>
              </p>
              <div>
                {["Singing", "Dancing", "Cooking", "Baking"].map((hobby) => (
                  <span key={hobby} className="hobby-tag">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
