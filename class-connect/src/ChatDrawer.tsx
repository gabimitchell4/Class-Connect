import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatDrawer = ({ isOpen, onClose, pair }) => {
  return (
    <div
      className={`chat-drawer ${isOpen ? "open" : ""}`}
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        width: "400px", // Increased width
        height: "95%",
        backgroundColor: "#f9f7fc",
        boxShadow: "-4px 0 8px rgba(0, 0, 0, 0.2)",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
        padding: "20px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Close Button */}
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        ✕
      </button>

      {/* Chat Content */}
      <div style={{ flex: 1, paddingBottom: "20px" }}>
        {pair ? (
          <div>
            <h3 style={{ color: "#6b238e" }}>{pair.name}</h3>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "#6b238e",
                color: "#fff",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
                textAlign: "right",
              }}
            >
              Hey Alex! Excited to see you at Yoga today!
            </div>
            <div
              style={{
                backgroundColor: "#6b238e",
                color: "#fff",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              Same here! See you then!
            </div>
          </div>
        ) : (
          <p>No chat selected</p>
        )}
      </div>

      {/* Input Field */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #ddd",
          paddingTop: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginRight: "10px",
            outline: "none",
          }}
        />
        <button
          style={{
            backgroundColor: "#6b238e",
            color: "#fff",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatDrawer;
